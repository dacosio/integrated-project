import React from "react";
import "./DescriptionCard.css";
import Button from "./../Button/Button";
import Typography from "../Typography/Typography";
// import { EvalDevToolModulePlugin } from "webpack";

const DescriptionCard = ({ description, onClick }) => {
  return (
    <div className="dcwrapper">
      <div className="description-container">
        <div className="item-description">
          <Typography variant="h4-graphik-bold" style={{"margin":".5rem 0"}}>Description</Typography>
          <Typography variant="body-2-regular" color="gray">{description}</Typography>
        </div>
        {/* <div className="portion-description">
        <h2>Each portion contains</h2>
        <p>{portionDescription}</p>
        </div> */}
        <div className="button" style={{"margin":"1rem 0"}}>
          <Button
            onClickHandler={onClick}
            size="lg"
            variant="yellow"
            label="Request Purchase"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(DescriptionCard);
