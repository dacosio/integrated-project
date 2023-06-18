import React, { useState } from "react";
import PageTabs from "./../components/base/PageTabs/PageTabs";

const Cylvia = (props) => {
  const [first, setfirst] = useState();
  return (
    <div>
      <h1>Cylvia</h1>
      <PageTabs/>
    </div>
  );
};

export default Cylvia;
