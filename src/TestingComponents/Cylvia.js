import React, { useState } from "react";
import SellerInfoCard from "./../components/base/SellerInfoCard/SellerInfoCard";

const Cylvia = (props) => {
  const [first, setfirst] = useState();
  return (
    <div>
      <h1>Cylvia</h1>
      <SellerInfoCard source="https://picsum.photos/200" username="cylvito" location="hornby island, bc" items="1"/>
    </div>
  );
};

export default Cylvia;
