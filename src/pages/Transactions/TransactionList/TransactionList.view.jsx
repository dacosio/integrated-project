import { useEffect, useState } from "react";
import Typography from "../../../components/base/Typography/Typography";
import PageTabs from "../../../components/base/PageTabs/PageTabs";
import Dropdown from "../../../components/base/Dropdown/Dropdown";
import TransactionCard from "../../../components/base/TransactionCard/TransactionCard";
import "./TransactionList.css";
import { Link } from "react-router-dom";

const TransactionList = (props) => {
  const {
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
  } = props;
  return (
    <div className="orders-list">
      <div className="title-wrapper">
        <Typography variant="h3-graphik-bold">Orders</Typography>
        <Dropdown
          selectedOption={orderType}
          setSelectedOption={setOrderType}
          options={orderTypeOptions}
          label="Select"
        />
        <PageTabs
          item1="Pending"
          item2="Confirmed"
          item3="Completed"
          item4="Cancelled"
        />
      </div>

      <div className="orders">
        {filteredOrders &&
          filteredOrders.map((o) => {
            const today = new Date();
            let createdAt = new Date(o.createdAt.toDate());
            createdAt.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            const timeDiff = today.getTime() - createdAt.getTime();
            const days = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
            return (
              <Link to={`/listing/${o.id}`} state={{ data: o }}>
                <TransactionCard
                  key={o.id}
                  type={o.orderType}
                  itemName={o.name}
                  time={days}
                  portions={o.qty}
                  sellerName={o.splitterName}
                  price={o.price}
                  source={o.imageUrl}
                  orderStatus={o.orderStatus}
                  onCancel={() => onCancel(o.id, o.productId)}
                  onDecline={() => onDecline(o.id, o.productId)}
                  onAccept={() => onAccept(o.id, o.productId)}
                  onComplete={() => onComplete(o.id, o.productId)}
                  onClick={() => {
                    console.log("test");
                  }}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default TransactionList;
