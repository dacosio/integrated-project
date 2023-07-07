import React, { useEffect, useState } from "react";
import { query, collection, orderBy, getDoc, doc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";
import db from "../../../config/firebaseConfig";

import TransactionDetailView from "./TransactionDetail.view";

const TransactionDetail = () => {
  const [order, setOrder] = useState();
  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const orderDocRef = doc(db, "order", "WZnq3cRGiVmtUEUojfmV");
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
  }, []);

  console.log(order);
  const generatedProps = {
    order,
    Navigate,
  };

  return <TransactionDetailView {...generatedProps} />;
};

export default TransactionDetail;
