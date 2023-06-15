import React from "react";
import "./DescriptionCard.css";
import Button from "./../Button/Button";
import Typography from "../Typography/Typography";
// import { EvalDevToolModulePlugin } from "webpack";

const DescriptionCard = ({ description }) => {
  return (
    <div className="dcwrapper">
      <div className="description-container">
        <div className="item-description">
          <Typography className="h4-graphik-bold">Description</Typography>
          <Typography className="body-2-regular">{description}</Typography>
        </div>
        {/* <div className="portion-description">
        <h2>Each portion contains</h2>
        <p>{portionDescription}</p>
        </div> */}
        <div className="button">
          <Button size="lg" variant="primary" label="Request Purchase" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
