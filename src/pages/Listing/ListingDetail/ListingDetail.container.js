import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import store, { storage } from "../../../config/firebaseConfig";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  startAfter,
  limit,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import ListDetailView from "./ListingDetail.view";

const ListingDetail = () => {
  const { listingId } = useParams();
  const [productRef, setProductRef] = useState();
  const [product, setProduct] = useState();
  const [seller, setSeller] = useState();
  const [itemsNumber, setItemsNumber] = useState();
  const [images, setImages] = useState();
  const [carouselVisibility, setCarouselVisibility] = useState(false);
  const [requestVisibility, setRequestVisibility] = useState(false);
  const [cancelVisibility, setCancelVisibility] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { user } = UserAuth();

  useEffect(() => {
    const productRef = doc(store, "product", listingId);

    setProductRef(productRef);

    getDoc(productRef)
      .then((productResponse) => {
        setProduct(productResponse.data());

        getDocs(collection(productRef, "image"))
          .then((imageResponse) => {
            const _images = [];
            imageResponse.docs.forEach((doc) => {
              _images.push(doc.data().imageUrl);
            });
            setImages(_images);
          })
          .catch((error) => {
            console.log(error);
          });

        const sellerRef = productResponse.data().createdById;

        getDoc(sellerRef)
          .then(async (sellerResponse) => {
            setSeller(sellerResponse.data());

            const productsRef = collection(store, "product");

            getDocs(
              query(productsRef, where("createdById", "==", sellerRef))
            ).then((itemsResponse) => {
              setItemsNumber(itemsResponse.docs.length);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (user && productRef && seller) {
      onSnapshot(
        query(
          collection(store, "order"),
          where("productById", "==", productRef.id),
          where("sellerByEmail", "==", seller.email),
          where("buyerByEmail", "==", user.email)
        ),
        (snapshot) => {
          setTransactions(snapshot.docs);
        }
      );
    }
  }, [productRef, seller, user]);

  const handleOnOpen = () => {
    setCarouselVisibility(true);
  };

  const handleOnClose = () => {
    setCarouselVisibility(false);
  };

  const handleOnOpenRequest = () => {
    setRequestVisibility(true);
  };

  const handleOnConfirmRequest = () => {
    addDoc(collection(store, "order"), {
      productById: productRef.id,
      sellerByEmail: seller.email,
      buyerByEmail: user.email,
      qty: quantity,
      createdAt: new Date(),
    });

    setRequestVisibility(false);
  };

  const handleOnCloseRequest = () => {
    setRequestVisibility(false);
  };

  const handleOnOpenCancel = () => {
    setCancelVisibility(true);
  };

  const handleOnConfirmCancel = () => {
    deleteDoc(doc(store, "order", transactions[0].id));

    setCancelVisibility(false);
  };

  const handleOnCloseCancel = () => {
    setCancelVisibility(false);
  };

  const generatedProps = {
    user: user,
    product: product,
    seller: seller,
    itemsNumber: itemsNumber,
    images: images,
    carouselVisibility: carouselVisibility,
    requestVisibility: requestVisibility,
    cancelVisibility: cancelVisibility,
    transactions: transactions,
    quantity: quantity,
    setQuantity: setQuantity,
    handleOnOpen: handleOnOpen,
    handleOnClose: handleOnClose,
    handleOnOpenRequest: handleOnOpenRequest,
    handleOnConfirmRequest: handleOnConfirmRequest,
    handleOnCloseRequest: handleOnCloseRequest,
    handleOnOpenCancel: handleOnOpenCancel,
    handleOnConfirmCancel: handleOnConfirmCancel,
    handleOnCloseCancel: handleOnCloseCancel,
  };
  return <ListDetailView {...generatedProps} />;
};

export default ListingDetail;
