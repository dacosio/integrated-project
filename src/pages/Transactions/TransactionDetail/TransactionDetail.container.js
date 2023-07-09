import React, { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import db from "../../../config/firebaseConfig";

import TransactionDetailView from "./TransactionDetail.view";

const TransactionDetail = () => {
  const [order, setOrder] = useState();
  const location = useLocation();
  const { transactionId } = useParams();
  const navigate = useNavigate();
  const orderStatusRef = doc(db, "order", transactionId);

  const handleOnDecline = async () => {
    console.log("Declined");
    try {
      await updateDoc(orderStatusRef, { orderStatus: "cancelled" });
      setOrder((oldData) => ({ ...oldData, orderStatus: "cancelled" }));

      console.log("Order status updated successfully");
    } catch (error) {
      console.error("Order status fail to update");
    }
  };

  const handleOnAccept = async () => {

    try{
      await updateDoc(orderStatusRef, { orderStatus: "confirmed" });
      setOrder((oldData) => ({ ...oldData, orderStatus: "confirmed" }));
      console.log("Order status updated successfully");
    } catch (error) {
      console.error("Order status fail to update");
    }
  };

  const handleOnComplete = async () => {
    try{
    await updateDoc(orderStatusRef, { orderStatus: "completed" })
    setOrder((oldData) => ({ ...oldData, orderStatus: "completed" }));
    console.log("Order status updated successfully");
  } catch (error) {
    console.error("Order status fail to update");
  }
};
  

//   const handleOnDecline = async () => {
//     console.log("Declined");
//     updateDoc(orderStatusRef, { orderStatus: "cancelled" }).then((response) => {
//       setOrder((oldData) => ({ ...oldData, orderStatus: "cancelled" }));
//       console.log(response);
//     });
//     console.log("Order status updated successfully");
//   };

//   const handleOnAccept = async () => {
//     updateDoc(orderStatusRef, { orderStatus: "confirmed" }).then((response) => {
//     setOrder((oldData) => ({ ...oldData, orderStatus: "confirmed" }));
//   });
//   console.log("Order status updated successfully");
// };

//   const handleOnComplete = async () => {
//     updateDoc(orderStatusRef, { orderStatus: "completed" }).then((response) => {
//     setOrder((oldData) => ({ ...oldData, orderStatus: "completed" }));
//   });
//   console.log("Order status updated successfully");
// };

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const orderDocRef = doc(db, "order", transactionId);
        const orderSnap = await getDoc(orderDocRef);
        if (orderSnap.exists) {
          setOrder({
            id: orderSnap.id,
            ...orderSnap.data(),
          });
        } else {
          console.log("Document does not exist!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchDocument();
  }, [transactionId, location]);

  console.log(order);
  const generatedProps = {
    order,
    navigate,
    handleOnDecline,
    handleOnAccept,
    handleOnComplete,
  };

  return <TransactionDetailView {...generatedProps} />;
};

export default TransactionDetail;
