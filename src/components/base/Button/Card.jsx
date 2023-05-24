import React from "react";
import { Button } from "./Button";
import "./card.css";

export const Card = ({ className, name, position, isFollowed }) => {
  return (
    <div className={["card"]}>
      <div className="card-image-wrapper">
        <div className={["card-image", className].join(" ")}></div>
      </div>
      <div className="card-info-wrapper">
        <div className="card-name-wrapper">{name}</div>
        <div className="card-position-wrapper">{position}</div>
      </div>
      <div className="card-button-wrapper">
        <Button isFollowed={isFollowed === "true" ? true : false} />
      </div>
    </div>
  );
};
