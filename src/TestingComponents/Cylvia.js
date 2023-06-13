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
    </div>
  );
};

export default Cylvia;
