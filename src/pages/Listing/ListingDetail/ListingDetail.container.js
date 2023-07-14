import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import store from "../../../config/firebaseConfig";
import {
  collection,
  doc,
  addDoc,
  getDoc,
  where,
  getDocs,
  deleteDoc,
  query,
  serverTimestamp,
  Timestamp,
  GeoPoint,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import ListDetailView from "./ListingDetail.view";

const ListingDetail = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [product, setProduct] = useState(location.state);
  const [seller, setSeller] = useState();
  const [quantity, setQuantity] = useState(1);
  const [isRequested, setIsRequested] = useState();
  const [orderId, setOrderId] = useState("");
  const [carouselVisibility, setCarouselVisibility] = useState(false);
  const [requestVisibility, setRequestVisibility] = useState(false);
  const [cancelVisibility, setCancelVisibility] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate("/");
    } else {
      getDoc(doc(store, "user", product.createdByIdent))
        .then((sellerResponse) => {
          getDocs(
            query(
              collection(store, "order"),
              where("createdById", "==", product.createdByIdent),
              where("orderStatus", "==", "completed")
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
    }
  }, []);

  useEffect(() => {
    if (user.uid) {
      getDocs(
        query(
          collection(store, "order"),
          where("productId", "==", product.id),
          where("splitteeId", "==", user.uid)
        )
      ).then((orderResponse) => {
        if (orderResponse.empty) {
          setIsRequested(false);
        } else {
          setIsRequested(true);
          setOrderId(orderResponse.docs[0].id);
        }
      });
    }
  }, [user, product]);

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
      const time = serverTimestamp();
      addDoc(collection(store, "order"), {
        createdAt: time,
        imageUrl: product.images[0],
        latitude: product.latitude,
        location: new GeoPoint(product.latitude, product.longitude),
        longitude: product.longitude,
        meetupAddress: product.meetUpAddress,
        meetupSchedule: new Timestamp(
          product.meetUpInfo.seconds,
          product.meetUpInfo.nanoseconds
        ),
        name: product.name,
        orderStatus: "pending",
        price: product.price,
        productId: product.id,
        qty: quantity,
        splitteeId: user.uid,
        splitterId: seller.id,
        splitterName: seller.displayName,
        updatedAt: time,
      }).then((response) => {
        setIsRequested(true);
        setOrderId(response.id);
        setRequestVisibility(false);
      });
    }
  };

  const handleOnCloseRequest = () => {
    setRequestVisibility(false);
  };

  const handleOnOpenCancel = () => {
    setCancelVisibility(true);
  };

  const handleOnConfirmCancel = () => {
    deleteDoc(doc(store, "order", orderId)).then(() => {
      setIsRequested(false);
      setOrderId("");
      setCancelVisibility(false);
    });
  };

  const handleOnCloseCancel = () => {
    setCancelVisibility(false);
  };

  const generatedProps = {
    user,
    product,
    seller,
    quantity,
    setQuantity,
    isRequested,
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
  };
  return <ListDetailView {...generatedProps} />;
};

export default ListingDetail;
