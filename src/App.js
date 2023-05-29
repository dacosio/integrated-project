import React from "react";
import { Button } from "./components/base/Button/Button";
function App() {
  return (
    <div className="App">
      <Button label="Button" size="lg" primary={true} />
      <Button label="Button" size="lg" />
      <Button label="Button" size="md" primary={true} />
      <Button label="Button" size="md" />
      <Button label="Button" size="sm" primary={true} />
      <Button label="Button" size="sm" />
      <Button label="Button" size="lg-block" primary={true} />
      <Button label="Button" size="lg-block" />
      <Button label="Button" size="md-block" primary={true} />
      <Button label="Button" size="md-block" />
      <Button label="Button" size="sm-block" primary={true} />
      <Button label="Button" size="sm-block" />
      <Button label="Button" size="lg" backgroundColor="black" color="white" />
      <Button label="Button" size="lg" backgroundColor="red" color="white" />
    </div>
  );
}

export default App;
