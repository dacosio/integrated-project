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
  const [visibility, setVisibility] = useState(false);
  const [transactions, setTransactions] = useState([]);
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
          collection(store, "transaction"),
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
    setVisibility(true);
  };

  const handleOnClose = () => {
    setVisibility(false);
  };

  const handleOnRequest = () => {
    addDoc(collection(store, "transaction"), {
      productById: productRef.id,
      sellerByEmail: seller.email,
      buyerByEmail: user.email,
      createdAt: new Date(),
    });
  };

  const handleOnCancel = () => {
    deleteDoc(doc(store, "transaction", transactions[0].id));
  };

  const generatedProps = {
    user: user,
    product: product,
    seller: seller,
    itemsNumber: itemsNumber,
    images: images,
    visibility: visibility,
    transactions: transactions,
    setVisibility: setVisibility,
    handleOnOpen: handleOnOpen,
    handleOnClose: handleOnClose,
    handleOnRequest: handleOnRequest,
    handleOnCancel: handleOnCancel,
  };
  return <ListDetailView {...generatedProps} />;
};

export default ListingDetail;
