import React, { useState } from "react";
import PageTabs from "./../components/base/PageTabs/PageTabs";

const Cylvia = (props) => {
  const [first, setfirst] = useState();
  return (
    <div>
      <h1>Cylvia</h1>
      <PageTabs item1="Active" item2="Request" item3="Complete"/>
    </div>
  );
};

export default Cylvia;
