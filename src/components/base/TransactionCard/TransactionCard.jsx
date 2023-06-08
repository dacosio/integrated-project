import React from "react";
import Button from "../Button/Button";
import "./TransactionCard.css";

const TransactionCard = (props) => {
  const { type, itemName, time, portions, sellerName, price } = props;

  const cardStyle = {
      border: type === 'buying' ? '#0B5CBB 2px solid' : '#FFBF44 2px solid',
    };

  const buttons = () => {
    if (type === 'buying') {
      return (
        <Button size='sm' variant='gray' label="Pending" disabled/>
      )
    } else {
        return (
          <>
            <Button size='sm' variant='gray' label="Decline" />
            <Button size='sm' variant='primary' label="Accept" />
          </>
        )
      }
    }

  return (
    <div className={["transaction-card", { type }].join(" ")} style={cardStyle}>
      <div className="image-container"></div>
      <div className="product-information">
        <div>
          <h3>{itemName}</h3>
          <p className="price">${price}</p>
        </div>
        <p className="time">{time} days ago</p>
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
        {/* {type === 'buying' ? <Button label="pending" /> : <><Button label="Accept" /><Button label="Cancel"/></>} */}
      </div>
    </div>
  );
};

export default TransactionCard;
