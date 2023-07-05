import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import store, { storage } from "../../../config/firebaseConfig";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  where,
  getDocs,
  deleteDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import ListDetailView from "./ListingDetail.view";

const ListingDetail = () => {
  const { user } = UserAuth();
  const { listingId } = useParams();
  const [product, setProduct] = useState();
  const [seller, setSeller] = useState();
  const [transactions, setTransactions] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [carouselVisibility, setCarouselVisibility] = useState(false);
  const [requestVisibility, setRequestVisibility] = useState(false);
  const [cancelVisibility, setCancelVisibility] = useState(false);

  useEffect(() => {
    getDoc(doc(store, "product", listingId))
      .then((productResponse) => {
        setProduct(productResponse.data());

        const sellerRef = productResponse.data().createdById;

        getDoc(sellerRef)
          .then((sellerResponse) => {
            getDocs(
              query(
                collection(store, "product"),
                where("createdById", "==", sellerRef)
              )
            ).then((itemsResponse) => {
              setSeller({
                ...sellerResponse.data(),
                qty: itemsResponse.docs.length,
              });
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
    if (user.email) {
      const unsubscribe = onSnapshot(
        query(
          collection(store, "order"),
          where("productById", "==", listingId),
          where("buyerByEmail", "==", user.email)
        ),
        (snapshot) => {
          setTransactions(snapshot.docs);
        }
      );

      return () => unsubscribe();
    }
  }, [user]);

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
    if (0 < quantity && quantity <= product.qty) {
      addDoc(collection(store, "order"), {
        productById: listingId,
        sellerByEmail: seller.email,
        buyerByEmail: user.email,
        qty: quantity,
        createdAt: new Date(),
      });

      setRequestVisibility(false);
    }
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

  // get the state of the products from here*****************
  const location = useLocation();
  console.log(location, " useLocation Hook");
  const data = location.state;
  console.log(data);
  //

  const generatedProps = {
    user,
    product,
    seller,
    transactions,
    quantity,
    setQuantity,
    carouselVisibility,
    requestVisibility,
    cancelVisibility,
    handleOnOpen,
    handleOnClose,
    handleOnOpenRequest,
    handleOnConfirmRequest,
    handleOnCloseRequest,
    handleOnOpenCancel,
    handleOnConfirmCancel,
    handleOnCloseCancel,
    data,
  };
  return <ListDetailView {...generatedProps} />;
};

export default ListingDetail;
