import React, { useEffect, useState } from "react";
import TransactionListView from "./TransactionList.view";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "@firebase/firestore";
import db from "../../../config/firebaseConfig";
import { redirect, useLocation } from "react-router-dom";

const TransactionList = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState("pending");
  const [orderType, setOrderType] = useState("selling");
  const orderTypeOptions = [
    { value: "selling", label: "Selling" },
    { value: "buying", label: "Buying" },
  ];

  useEffect(
    () =>
      onSnapshot(collection(db, "order"), (snapshot) => {
        return setOrders(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  const filteredOrders = orders.filter(
    (order) =>
      order.orderType === orderType && order.orderStatus === orderStatus
  );

  console.log(orders);

  const clickHandler = async (orderId, orderStatus, productId) => {
    const orderDocRef = doc(db, "order", orderId);
    const orderSnap = await getDoc(orderDocRef);
    const orderQty = Number(orderSnap.data().qty);

    const productDocRef = doc(db, "product", productId);
    const productSnap = await getDoc(productDocRef);
    const productQty = Number(productSnap.data().qty);

    let payload = {};
    if (orderStatus === "confirmed") {
      payload = {
        qty: productQty - orderQty,
      };
      await updateDoc(productDocRef, payload);
      await updateDoc(orderDocRef, {
        orderStatus,
        updatedAt: serverTimestamp(),
      });
    } else if (orderStatus === "cancelled") {
      payload = {
        qty: productQty + orderQty,
      };
      await updateDoc(productDocRef, payload);
      await updateDoc(orderDocRef, {
        orderStatus,
        updatedAt: serverTimestamp(),
      });
    } else {
      await updateDoc(orderDocRef, {
        orderStatus,
        updatedAt: serverTimestamp(),
      });
    }
  };

  const onDecline = (orderId, productId) => {
    console.log("decline");
    clickHandler(orderId, "cancelled", productId);
  };
  const onAccept = (orderId, productId) => {
    console.log("accepted", orderId, productId);
    clickHandler(orderId, "confirmed", productId);
  };

  const onCancel = (orderId, productId) => {
    console.log("cancel");
    clickHandler(orderId, "cancelled", productId);
  };
  const onComplete = (orderId, productId) => {
    console.log("complete");
    clickHandler(orderId, "complete", productId);
  };

  // get the state of the products from here*****************
  const location = useLocation();
  console.log(location, " useLocation Hook");
  const data = location.state;
  console.log(data);

  const redirectTo = (id) => redirect(`/transaction${id}`);
  const generatedProps = {
    // generated props here
    filteredOrders,
    orderType,
    setOrderType,
    orderStatus,
    setOrderStatus,
    orderTypeOptions,
    onCancel,
    onDecline,
    onAccept,
    onComplete,
    redirectTo,
  };
  return <TransactionListView {...generatedProps} />;
};

export default TransactionList;
