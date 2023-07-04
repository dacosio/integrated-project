import { useEffect, useState } from "react";
import Typography from "../../../components/base/Typography/Typography";
import PageTabs from "../../../components/base/PageTabs/PageTabs";
import SelectDropdown from "../../../components/base/SelectDropdown/SelectDropdown";
import TransactionCard from "../../../components/base/TransactionCard/TransactionCard";
import Pagination from "../../../components/base/Pagination/Pagination";
import "./TransactionList.modules.css";

const TransactionList = (props) => {
  const { orderType, setOrderType } = props;
  const [orderStatus, setOrderStatus] = useState("");

  const handleStatusChange = (event) => {
    setOrderStatus(event.target.value);
  };

  const options = [
    { value: "all", label: "All" },
    { value: "buying", label: "Buying" },
    { value: "selling", label: "Selling" },
  ];

  return (
    <div className="orders-list">
      <div className="title-wrapper">
        <Typography variant="h3-graphik-bold">Orders</Typography>
        <SelectDropdown
          selectedStatus={orderType}
          handleStatusChange={handleStatusChange}
          options={options}
          label="Select"
        />
        <PageTabs
          item1="Pending"
          item2="Confirmed"
          item3="Completed"
          item4="Cancelled"
          // onClick={onClickHandler}
        />
      </div>

      <div className="orders">
        <TransactionCard
          type="selling"
          itemName="banana"
          time="2"
          portions="10"
          sellerName="cylvito"
          price="5"
          source="https://picsum.photos/200/400"
        />
        <TransactionCard
          type="buying"
          itemName="banana"
          time="2"
          portions="10"
          sellerName="cylvito"
          price="5"
          source="https://picsum.photos/200/400"
        />
        <TransactionCard
          type="completed"
          itemName="banana"
          time="2"
          portions="10"
          sellerName="cylvito"
          price="5"
          source="https://picsum.photos/200/400"
        />
        <TransactionCard
          type="selling"
          itemName="banana"
          time="2"
          portions="10"
          sellerName="cylvito"
          price="5"
          source="https://picsum.photos/200/400"
        />
      </div>

      <button onClick={() => setOrderType("selling")}>Toggle </button>
      <Pagination />
    </div>
  );
};

export default TransactionList;
