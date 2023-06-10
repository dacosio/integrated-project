import React, { useState } from "react";
import ActiveListingCard from "./../components/base/ActiveListingCard/ActiveListingCard";

const Cylvia = (props) => {
  const [first, setfirst] = useState();
  return (
    <div>
      <h1>Cylvia</h1>
      <ActiveListingCard
        distance="1"
        days="8"
        source="https://picsum.photos/200/300"
        itemname="banana"
        price="4"
        stock="8"
      />
    </div>
  );
};

export default Cylvia;
