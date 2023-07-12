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
import { UserAuth } from "../../../context/AuthContext";
import db from "../../../config/firebaseConfig";

const TransactionList = () => {
  const { user } = UserAuth();
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState("pending");
  const orderTabs = ["Pending", "Confirmed", "Completed", "Cancelled"];
  const [selectedTab, setSelectedTab] = useState(orderTabs[0]);

  const [orderResults, setOrderResults] = useState([]);
  const orderTypeOptions = [
    { value: "selling", label: "Selling" },
    { value: "buying", label: "Buying" },
  ];

  const [orderType, setOrderType] = useState("selling");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "order"), (snapshot) => {
      let orders = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const selling = orders.filter((order) => {
        return (
          order.orderStatus.toLowerCase() === selectedTab.toLowerCase() &&
          order.splitterId === user.uid
        );
      });

      const buying = orders.filter((order) => {
        return (
          order.orderStatus.toLowerCase() === selectedTab.toLowerCase() &&
          order.splitteeId === user.uid
        );
      });

      if (orderType === "selling") {
        setOrderResults(selling);
      } else if (orderType === "buying") {
        setOrderResults(buying);
      }
    });

    return () => unsubscribe();
  }, [orderStatus, orderType, user.uid, selectedTab]);
  console.log(selectedTab);
  const handleTabChange = (selectedTab) => {
    setSelectedTab(selectedTab);
  };

  const onChange = (v) => {
    setOrderType(v[0].value);
  };

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
    // console.log("decline");
    clickHandler(orderId, "cancelled", productId);
  };
  const onAccept = (orderId, productId) => {
    // console.log("accepted", orderId, productId);
    clickHandler(orderId, "confirmed", productId);
  };

  const onCancel = (orderId, productId) => {
    // console.log("cancel");
    clickHandler(orderId, "cancelled", productId);
  };

  const onComplete = (orderId, productId) => {
    // console.log("complete");
    clickHandler(orderId, "completed", productId);
  };

  console.log(selectedTab);
  const generatedProps = {
    // generated props here
    orderStatus,
    setOrderStatus,
    orderTypeOptions,
    onCancel,
    onDecline,
    onAccept,
    onComplete,
    orderResults,
    onChange,
    orderType,
    orderTabs,
    handleTabChange,
    user,
  };
  return <TransactionListView {...generatedProps} />;
};

export default TransactionList;
