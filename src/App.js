import React, { useState } from "react";
// import FirebaseSample from "./config/FirebaseSample";
import Login from "./pages/Account/Login/Login.container";
import MapSearch from "./components/base/MapSearch/MapSearch";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      {/* <FirebaseSample /> */}
      <Login />
    </div>
  );
}

export default App;
