import React from "react";
import Image from "../Image/Image";
import Typography from "../Typography/Typography";
import "./buyerContactCard.css";
import UserSVG from "../SVG/UserSVG";
import PhoneSVG from "../SVG/PhoneSVG";
import EnvelopeSVG from "../SVG/EnvelopeSVG";

const BuyerContactCard = ({ source, nameOfBuyer, contactTel, email }) => {
  return (
    <div className="buyer-contact-card-wrapper">
      <div className="buyer-contact-card">
        <Typography className="h3-graphik-bold">Sold to</Typography>
        <div className="image-container">
          <Image source={source} />
        </div>
        <div className="buyer-description">
          <div className="buyer-contact-description">
            <div className="name-container">
              <UserSVG height={21} width={18} fill={"none"}/>
              <Typography className="body-1-regular">{nameOfBuyer}</Typography>
            </div>

            <div className="conatct-tel-container">
              <PhoneSVG height={20} width={20} fill={"none"}/>
              <Typography className="body-1-regular">{contactTel}</Typography>
            </div>
            <div className="email-container">
              <EnvelopeSVG height={14} width={20} fill={"none"}/>
              <Typography className="body-1-regular">{email}</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerContactCard;
