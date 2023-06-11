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
      <Typography className="h2-graphik-bold">Sold to</Typography>
      <div className="image-container">
        <Image source={source} />
      </div>
      <div className="buyer-contact-description">
        <Typography className="name-of-buyer body-1-regular">
          <UserSVG height={16} width={16} />
          {nameOfBuyer}
        </Typography>

        <Typography className="contact-tel body-1-regular">
          <PhoneSVG height={16} width={16} />
          {contactTel}
        </Typography>

        <Typography className="email body-1-regular">
          <EnvelopeSVG height={16} width={16} />
          {email}
        </Typography>
      </div>
    </div>
  );
};

export default BuyerContactCard;
