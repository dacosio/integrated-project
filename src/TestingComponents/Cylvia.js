import React, { useState } from "react";
import ImageLabel from "./../components/base/ImageLabel/imageLabel";
import Image from "./../components/base/Image/Image"
import Imagewithdescription from "../components/base/Imagewithdescription/Imagewithdescription";

const Cylvia = (props) => {
  const [first, setfirst] = useState();
  return (
    <div>
      <h1>Cylvia</h1>
      <ImageLabel p1="1"/>
    </div>
  );
};

export default Cylvia;