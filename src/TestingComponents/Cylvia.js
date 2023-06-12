import React, { useState } from "react";
import LoginView from "./../pages/Auth/Login/Login.view";
import ActiveListingCard from "./../components/base/ActiveListingCard/ActiveListingCard"
import DescriptionCard from "./../components/base/DescriptionCard/DescriptionCard"
import ImageLabel from "./../components/base/ImageLabel/imageLabel"
import Image from "./../components/base/Image/Image"
import TransactionCard from "./../components/base/TransactionCard/TransactionCard"



const Cylvia = (props) => {
  const [first, setfirst] = useState();
  return (
    <div>
      <h1>Cylvia</h1>
      <LoginView/>
      <ActiveListingCard distance="3" days="3" source="https://picsum.photos/200" itemname="banana" price="40" stock="8"/>
      <DescriptionCard description="banana for sale, bought yesterday" portionDescription="each portion contains two bananas"/>
      <ImageLabel distance="8" days="1"/>
      <TransactionCard type="buying" itemName="banana" time="3" portions="4" sellerName="cylvito" price="20" />
    </div>
  );
};

export default Cylvia;
