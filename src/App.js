import React, { useState } from "react";
// import FirebaseSample from "./config/FirebaseSample";
import Login from "./pages/Account/Login/Login.container";
import MapSearch from "./components/base/MapSearch/MapSearch";
import Carrousel from "./components/module/Carrousel";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      {/* <FirebaseSample /> */}
      <Login />
      <Carrousel />
    </div>
  );
}

export default App;
