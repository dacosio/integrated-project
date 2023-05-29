import React from "react";
import { Button } from "./components/base/Button/Button";
import { Pagetabs } from "./components/module/pagetabs/pagetabs";

function App() {
  return (
    <div className="App">
      <Button label="Submit" size="md" />
      <Pagetabs primary item1="tab1" item2="tab2" item3="tab3"/>
      <Pagetabs item1="tab1" item2="tab2" item3="tab3"/>
    </div>
  );
}

export default App;
