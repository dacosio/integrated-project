import React from "react";
import styles from "./bottomNav.module.css";
import { Link, useLocation } from "react-router-dom";
import PlusSVG from "../../base/SVG/PlusSVG";
import { HomeSVG, OrderSVG, ProfileSVG, SettingsSVG } from "../../base/SVG";
import Typography from "../../base/Typography/Typography";

const BottomNav = (props) => {
  const location = useLocation();
  const darkblue = "var(--dark-blue)";
  const lightgray = "var(--light-gray)";
  const typoLightGray = "light-gray";
  const typoDarkBlue = "dark-blue";

  const activeColor = () => {
    let color = {
      svgColor: lightgray,
      typoColor: typoLightGray,
    };
    if (location.pathname === "/transaction") {
      color.svgColor = darkblue;
      color.typoColor = typoDarkBlue;
    } else if (location.pathname === "/") {
      color.svgColor = darkblue;
      color.typoColor = typoDarkBlue;
    }

    return color;
  };

  console.log(location.pathname);

  return (
    <div className={styles.wrapper} {...props}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">
              <HomeSVG stroke={activeColor().svgColor} width={26} height={23} />
              <Typography
                variant="body-3-medium"
                color={activeColor().typoColor}
              >
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="transaction">
              <OrderSVG stroke={activeColor().svgColor} />
              <Typography
                variant="body-3-medium"
                color={activeColor().typoColor}
              >
                Orders
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="listing/add">
              <PlusSVG height={30} width={30} fill="var(--dark-blue)" />
              <Typography variant="body-3-medium" color="light-gray">
                Post
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="register">
              <SettingsSVG stroke="var(--light-gray)" />
              <Typography variant="body-3-medium" color="light-gray">
                Settings
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="user">
              <ProfileSVG fill="var(--light-gray)" />
              <Typography variant="body-3-medium" color="light-gray">
                Profile
              </Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
