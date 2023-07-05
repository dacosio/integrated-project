import { useEffect, useState } from "react";
import Typography from "../../../components/base/Typography/Typography";
import PageTabs from "../../../components/base/PageTabs/PageTabs";
import Dropdown from "../../../components/base/Dropdown/Dropdown";
import TransactionCard from "../../../components/base/TransactionCard/TransactionCard";
import "./TransactionList.css";

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
            console.log(o);
            const today = new Date();
            let dateRequested = new Date(o.dateRequested.toDate());
            dateRequested.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);
            const timeDiff = today.getTime() - dateRequested.getTime();
            const days = Math.abs(Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
            return (
              <TransactionCard
                key={o.productId}
                type={o.orderType}
                itemName={o.name}
                time={days}
                portions={o.qty}
                sellerName={o.splitterName}
                price={o.price}
                source={o.coverImage}
                orderStatus={o.orderStatus}
                onCancel={onCancel}
                onDecline={onDecline}
                onAccept={() => onAccept(o.id, o.productId)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default TransactionList;
