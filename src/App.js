import React from "react";
import { Button } from "./components/base/Button/Button";
import FirebaseSample from "./config/FirebaseSample";

function App() {
  return (
    <div className="App">
      <Button label="Submit" size="md" />
      <FirebaseSample />
    </div>
  );
}

export default App;
