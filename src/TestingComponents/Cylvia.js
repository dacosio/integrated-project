import React, { useState } from "react";
import LoginView from "./../pages/Auth/Login/Login.view";

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
