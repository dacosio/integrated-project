<<<<<<< HEAD
import React from "react";
import { Button } from "./components/base/Button/Button";
import { Pagetabs } from "./components/module/pagetabs/pagetabs";
import { Textinput } from "./components/base/Input/Input"
=======
import React, { useState } from "react";
// import FirebaseSample from "./config/FirebaseSample";
import Login from "./pages/Account/Login/Login.container";
import MapSearch from "./components/base/MapSearch/MapSearch";
>>>>>>> dev

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
