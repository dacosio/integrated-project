import React, { useState } from "react";
import ImageUpload from "../components/base/ImageUpload/ImageUpload";
import SearchField from "../components/base/SearchField/SearchField";
import MapSearch from "../components/base/MapSearch/MapSearch";

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
        <MapSearch />
      </div>
    </div>
  );
};

export default Don;
