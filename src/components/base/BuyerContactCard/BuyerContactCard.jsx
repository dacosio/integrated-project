import React from "react";
import Typography from "../Typography/Typography";
import PhoneSVG from "../SVG/PhoneSVG";
import EnvelopeSVG from "../SVG/EnvelopeSVG";
import UserSVG from "../SVG/UserSVG";
import styles from "./buyerContactCard.module.css";

const BuyerContactCard = ({
  source,
  nameOfBuyer,
  contactTel,
  email,
  ...props
}) => {
  return (
    <div class={`${styles["buyer-contact-card-wrapper"]}`}>
      <div class={`${styles["buyer-contact-card"]}`}>
        <Typography
          variant="h4-graphik-bold"
          color="black"
          style={{ marginBottom: "12px" }}
        >
          Sold to
        </Typography>
        <div class={`${styles["buyer-contact-details"]}`}>
          <div class={`${styles["image-container"]}`}>
            <img src={source} alt="" />
          </div>
          <div class={`${styles["buyer-description"]}`}>
            <div class={`${styles["buyer-contact-description"]}`}>
              <div class={`${styles["name-container"]}`}>
                <UserSVG height={21} width={21} fill={"black"} />
                <Typography variant="body-1-regular" color="gray">
                  {nameOfBuyer}
                </Typography>
              </div>
              <div class={`${styles["conatct-tel-container"]}`}>
                <PhoneSVG height={22} width={21} fill={"none"} />
                <Typography variant="body-1-regular" color="gray">
                  {contactTel}
                </Typography>
              </div>
              <div class={`${styles["email-container"]}`}>
                <EnvelopeSVG height={14} width={21} fill={"none"} />
                <Typography variant="body-1-regular" color="gray">
                  {email}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(BuyerContactCard);
