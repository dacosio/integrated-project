import React, { useState } from "react";
import FirebaseSample from "../config/FirebaseSample";
import ImageUpload from "../components/base/ImageUpload/ImageUpload";
import SearchField from "../components/base/SearchField/SearchField";
import Button from "../components/base/Button/Button";

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
      <div>
        <SearchField />
      </div>
      <div>
        <Button size="md" variant="primary" label="Login" />
      </div>
    </div>
  );
};

export default Don;
