import React, { useEffect, useState } from "react";
import { query, collection, orderBy, getDocs } from "firebase/firestore";
import db from "../../../config/firebaseConfig";
import TransactionDetailView from "./TransactionDetail.view";
import { Navigate, useNavigate } from "react-router-dom";

const TransactionDetail = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersCollectionRef = collection(db, "order");
    const ordersQuery = query(
      ordersCollectionRef,
      orderBy("dateApproved", "desc")
    );

    getDocs(ordersQuery)
      .then((__ordersResponse) => {
        const orderPromises = __ordersResponse.docs.map(async (doc) => {
          const orderData = doc.data();
          const imageResponse = await getDocs(
            collection(ordersCollectionRef, doc.id, "image")
          );
          const imageDocs = imageResponse.docs;
          const image = imageDocs.filter(
            (imageDoc) => imageDoc.data().isCover === true
          );
          const imageUrl = image.length > 0 ? image[0].data().imageUrl : null;

          return {
            ...orderData,
            id: doc.id,
            imageUrl: imageUrl,
          };
        });

        Promise.all(orderPromises)
          .then((orders) => setOrders(orders))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }, []);

  const navigate = useNavigate();

  const generatedProps = {
    orders,
    navigate,
  };

  return <TransactionDetailView {...generatedProps} />;
};

export default TransactionDetail;
