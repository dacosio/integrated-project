import React from "react";
import Image from "../Image/Image";
import Typography from "../Typography/Typography";
import "./buyerContactCard.css";
import UserSVG from "../SVG/PhoneSVG";
import PhoneSVG from "../SVG/PhoneSVG";
import EnvelopeSVG from "../SVG/PhoneSVG";

const BuyerContactCard = ({ source, nameOfBuyer, contactTel, email }) => {
  return (
    <div className="buyer-contact-card">
      <div className="title-container">
        <Typography className="h2-graphik-bold">Sold to</Typography>
      </div>
      <div className="buyer-description">
        <div className="image-container">
          <Image source={source} />
        </div>
        <div className="buyer-contact-description">
          <div className="name-container">
            <UserSVG height={16} width={16} />
            <Typography className="body-1-regular">{nameOfBuyer}</Typography>
          </div>

          <div className="conatct-tel-container">
            <PhoneSVG height={16} width={16} />
            <Typography className="body-1-regular">{contactTel}</Typography>
          </div>
          <div className="email-container">
            <EnvelopeSVG height={16} width={16} />
            <Typography className="body-1-regular">{email}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerContactCard;
