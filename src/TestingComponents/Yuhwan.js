import React, { useState } from "react";
import ImageInput from "../components/base/ImageInput/ImageInput";

const Yuhwan = (props) => {
  const [images, setImages] = useState([]);

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <ImageInput images={images} setImages={setImages}></ImageInput>
    </div>
  );
};

export default Yuhwan;
