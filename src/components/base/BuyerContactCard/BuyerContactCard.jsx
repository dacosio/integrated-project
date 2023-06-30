import React from "react";
import Typography from "../Typography/Typography";
import PhoneSVG from "../SVG/PhoneSVG";
import EnvelopeSVG from "../SVG/EnvelopeSVG";
import UserSVG from "../SVG/UserSVG";
import "./buyerContactCard.css";

const BuyerContactCard = ({ source, nameOfBuyer, contactTel, email }) => {
  return (
    <div className="buyer-contact-card">
      <Typography
        variant="h4-graphik-bold"
        color="black"
        style={{"margin-bottom":"12px"}}

      >
        Sold to
      </Typography>
      <div className="buyer-contact-details">
        <div className="image-container">
          <img src={source} alt="" />
        </div>
        <div className="buyer-description">
          <div className="buyer-contact-description">
            <div className="name-container">
              <UserSVG height={21} width={21} fill={"black"} />
              <Typography variant="body-1-regular" color="gray">
                {nameOfBuyer}
              </Typography>
            </div>

            <div className="conatct-tel-container">
              <PhoneSVG height={22} width={21} fill={"none"} />
              <Typography variant="body-1-regular" color="gray">
                {contactTel}
              </Typography>
            </div>
            <div className="email-container">
              <EnvelopeSVG height={14} width={21} fill={"none"} />
              <Typography variant="body-1-regular" color="gray">
                {email}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(BuyerContactCard);
