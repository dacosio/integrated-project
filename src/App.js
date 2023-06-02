import React, { useState } from "react";
// import FirebaseSample from "./config/FirebaseSample";
import Login from "./pages/Account/Login/Login.container";
import MapSearch from "./components/base/MapSearch/MapSearch";

import Yuki from "./TestingComponents/Yuki";
import Don from "./TestingComponents/Don";
import Cylvia from "./TestingComponents/Cylvia";
import Yuhwan from "./TestingComponents/Yuhwan";

function App() {
  return (
    <div className="App">
      {/* <FirebaseSample /> */}
      {/* <Login /> */}

      <Yuki />
      <Don />
      <Yuhwan />
      <Cylvia />
    </div>
  );
}

export default App;
