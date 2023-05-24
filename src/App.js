import React from "react";
import { Card } from "./components/base/Button/Card";

function App() {
  return (
    <div className="App card-list">
      <Card className="image1" name="Salamat Po" position="Project Manager" isFollowed="false"></Card>
      <Card className="image2" name="Mabuti Naman" position="Software Engineer" isFollowed="true"></Card>
    </div>
  );
}

export default App;
