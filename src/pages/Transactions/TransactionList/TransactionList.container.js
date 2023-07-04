import React from "react";
import { useState, useEffect } from "react";
import TransactionListView from "./TransactionList.view";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "../../../config/firebaseConfig";

const TransactionList = (props) => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState("pending");
  const [orderType, setOrderType] = useState("buying");

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) => {
        return setOrders(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  const filteredItems = orders.filter((o) => o.orderType === orderType);

  console.log(filteredItems);

  const generatedProps = {
    // generated props here

    orders,
    orderStatus,
    orderType,
    setOrderType,
  };
  return <TransactionListView {...generatedProps} />;
};

export default TransactionList;

// // Create a reference to the cities collection
// import { collection, query, where } from "firebase/firestore";
// const citiesRef = collection(db, "cities");

// // Create a query against the collection.
// const q = query(citiesRef, where("state", "==", "CA"));
