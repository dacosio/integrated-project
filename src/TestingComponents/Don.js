import React, { useState } from "react";
import FirebaseSample from "../config/FirebaseSample";
import ImageUpload from "../components/base/ImageUpload/ImageUpload";

const Don = (props) => {
  return (
    <div>
      <h1>Don</h1>
      {/* <div>
        <FirebaseSample />
      </div> */}
      <div>
        <ImageUpload />
      </div>
    </div>
  );
};

export default Don;
