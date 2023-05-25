import React from "react";
import { Card } from "./components/base/Button/Card";
import { Component } from "./components/cylvia/cardcylvia";
import "./components/cylvia/cardcylvia.css"

function App() {
  return (
    <div className="App card-list">
      <Card className="image1" name="Salamat Po" position="Project Manager" isFollowed="false"></Card>
      <Card className="image2" name="Mabuti Naman" position="Software Engineer" isFollowed="true"></Card>
      <Component backgroundColor="orange" p="POPULAR" h2="FREE" item1="Get 24x7 support" item2="+120 screens" item3="+120 screens"  ></Component>
    </div>
  );
}

export default App;
