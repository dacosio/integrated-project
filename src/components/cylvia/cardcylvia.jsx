import React from "react";
import { Button } from "./buttoncylvia";

export const Component = ({ backgroundColor, p, h2, item1, item2, item3, isLoved }) => {
    
  return (
    <div className={["component", `component-${backgroundColor}`].join(" ")}>
      <div className="card-title">
        <div className="small-p">{p}</div>
        <div className="big-p">{h2}</div>
      </div>
      <ul className="list">
        <li className="list-item">{item1}</li>
        <li className="list-item">{item2}</li>
        <li className="list-item">{item3}</li>
      </ul>
      <div className="component-button-wrapper">
        <Button isLoved={isLoved === "true" ? true : false} />
      </div>
    </div>
  );
};