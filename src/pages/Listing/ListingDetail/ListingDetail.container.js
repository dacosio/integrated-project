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
  query,
  serverTimestamp,
} from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";
import ListDetailView from "./ListingDetail.view";

const ListingDetail = () => {
  const { user } = UserAuth();
  const { listingId } = useParams();
  const [product, setProduct] = useState();
  const [seller, setSeller] = useState();
  const [quantity, setQuantity] = useState(1);
  const [isRequested, setIsRequested] = useState();
  const [orderId, setOrderId] = useState("");
  const [carouselVisibility, setCarouselVisibility] = useState(false);
  const [requestVisibility, setRequestVisibility] = useState(false);
  const [cancelVisibility, setCancelVisibility] = useState(false);

  // get the state of the products from here*****************
  // const location = useLocation();
  // console.log(location, " useLocation Hook");
  // const data = location.state;
  // console.log(data);
  //

  useEffect(() => {
    getDoc(doc(store, "product", listingId))
      .then((productResponse) => {
        setProduct(productResponse.data());

        const sellerRef = productResponse.data().createdById;

        getDoc(sellerRef)
          .then((sellerResponse) => {
            getDocs(
              query(
                collection(store, "order"),
                where("createdById", "==", sellerRef.id),
                where("orderStatus", "==", "completed")
              )
            ).then((itemsResponse) => {
              setSeller({
                id: sellerResponse.id,
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
      getDocs(
        query(
          collection(store, "order"),
          where("productId", "==", listingId),
          where("splitteeId", "==", "LPGuEmp6UdcHRn27OWvd")
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
      const time = serverTimestamp();
      addDoc(collection(store, "order"), {
        createdAt: time,
        imageUrl: product.images[0],
        latitude: product.location._lat,
        longitude: product.location._long,
        meetupAddress: product.meetUpAddress,
        meetupSchedule: product.meetUpInfo,
        name: product.name,
        orderStatus: "pending",
        orderType: "buying",
        price: product.price,
        productId: listingId,
        qty: quantity,
        splitteeId: "LPGuEmp6UdcHRn27OWvd",
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
    // data,
  };
  return <ListDetailView {...generatedProps} />;
};

export default ListingDetail;
