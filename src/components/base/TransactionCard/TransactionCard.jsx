import React from "react";
import Button from "../Button/Button";
import "./TransactionCard.css";

const TransactionCard = (props) => {
  const { type, source, itemName, time, portions, sellerName, price } = props;

  const days = () => {
    if (time==="1") {
      return ("a day ago") 
    } else {
      return (`${time} days ago`)
    }
  }

  const buttons = () => {
    if (type === 'buying') {
      return (
        <Button size='sm' variant='gray' label="Cancel" />
      )
    } else if (type === 'selling') {
        return (
          <>
            <Button size='sm' variant='decline' label="Decline" />
            <Button size='sm' variant='accept' label="Accept" />
          </>
        )
      } else {
        return (<></>)
      }
    }

  return (
    <div className={["transaction-card", { type }].join(" ")}>
      <div className="image-container">
        <img src={source} alt="" />
      </div>
      <div className="product-information">
        <div>
          <h3>{itemName}</h3>
          <p className="price">${price}</p>
        </div>
        <p className="time">{days()}</p>
        <p className="quantity">
          <strong>Quantity:</strong> {portions}
        </p>
        <div className="seller-container">
          <p>
            <strong>Seller:</strong>
          </p>
          <p>{sellerName}</p>
        </div>
        
      </div>
      <div className="button-container">
        {buttons()}
      </div>
    </div>
  );
};

export default TransactionCard;
