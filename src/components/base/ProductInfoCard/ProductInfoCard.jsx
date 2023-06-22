import React from "react";
import Typography from "../Typography/Typography";
import { FiMapPin } from "react-icons/fi";
import { VscCalendar } from "react-icons/vsc";
import { ImCoinDollar } from "react-icons/im";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import styles from "./product-info-card.module.css";

function ProductInfoCard({
  title,
  price,
  quantity,
  date,
  name,
  address,
  ...props
}) {
  return (
    <div className={`${styles.wrapper}`}>
      <Typography variant="h3-graphik-bold" color="dark-blue">
        {title}
      </Typography>
      <div className={`${styles.grid}`}>
        <div className={`${styles.flex}`}>
          <ImCoinDollar size={20} />
          <Typography variant="body-1-medium">$ {price}</Typography>
        </div>
        <div className={`${styles.flex}`}>
          <AiOutlinePieChart size={20} />
          <Typography variant="body-2-regular">{quantity} available</Typography>
        </div>
        <div className={`${styles.flex}`}>
          <VscCalendar size={20} />
          <Typography variant="body-2-regular">
            {1 < date ? `${date} days` : `${date} day`} ago
          </Typography>
        </div>
        <div className={`${styles.flex}`}>
          <BiUserCircle size={20} />
          <Typography variant="body-2-regular">{name}</Typography>
        </div>
        <div className={`${styles.flex}`}>
          <FiMapPin size={20} />
          <Typography variant="body-2-regular">{address}</Typography>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProductInfoCard);
