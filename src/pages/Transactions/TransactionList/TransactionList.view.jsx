import { useEffect, useState } from "react";
import Typography from "../../../components/base/Typography/Typography";
import PageTabs from "../../../components/base/PageTabs/PageTabs";
import Dropdown from "../../../components/base/Dropdown/Dropdown";
import TransactionCard from "../../../components/base/TransactionCard/TransactionCard";
import "./TransactionList.css";

const TransactionList = (props) => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "value1", label: "Selling" },
    { value: "value2", label: "Buying" },
    { value: "value3", label: "Completed"},
  ];

  return (
    <div className="orders-list">
      <div className="title-wrapper">
        <Typography variant="h3-graphik-bold">Orders</Typography>
        <Dropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
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
        <TransactionCard type="selling" itemName="banana" time="2" portions="10" sellerName="cylvito" price="5" source="https://picsum.photos/200/400"/>
        <TransactionCard type="buying" itemName="banana" time="2" portions="10" sellerName="cylvito" price="5" source="https://picsum.photos/200/400"/>
        <TransactionCard type="completed" itemName="banana" time="2" portions="10" sellerName="cylvito" price="5" source="https://picsum.photos/200/400"/>
        <TransactionCard type="selling" itemName="banana" time="2" portions="10" sellerName="cylvito" price="5" source="https://picsum.photos/200/400"/>
      </div>
    </div>
  );
};

export default TransactionList;
