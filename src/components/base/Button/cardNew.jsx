
import RadioButton from "./Button";
import "./card.css";
import React, { useState } from "react";


export const CardNew = ({ name, content }) => {
    const [backgroundColor, setBackgroundColor] = useState("");
        const handleColorChange = (color) => {
            setBackgroundColor(color);
    };

  return (
    <div className="card-wrapper" style={{ backgroundColor: backgroundColor }}>
      <div className="card-button-wrapper">
        <RadioButton onColorChange={handleColorChange} />
      </div>
      <div className="card-name-wrapper">
        <h1>{name}</h1>
      </div>
      <div className="card-content-wrapper">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardNew;
