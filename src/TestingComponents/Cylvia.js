import React, { useState } from "react";
import TransactionCard from "../components/base/TransactionCard/TransactionCard";

const Cylvia = (props) => {
  const [first, setfirst] = useState();
  return (
    <div>
      <h1>Cylvia</h1>
      <TransactionCard type="buying" itemName="banana" time="1" portions="3" sellerName="jsx" price="10"/>
    </div>
  );
};

export default Cylvia;
