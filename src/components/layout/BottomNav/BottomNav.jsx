import React, { useState } from "react";
import styles from "./bottomNav.module.css";
import { Link, useLocation } from "react-router-dom";
import PlusSVG from "../../base/SVG/PlusSVG";
import { HomeSVG, OrderSVG, ProfileSVG, SettingsSVG } from "../../base/SVG";
import Typography from "../../base/Typography/Typography";
import useMediaQuery from "../../../utils/useMediaQuery";

const BottomNav = (props) => {
  const location = useLocation();
  const [link, setLink] = useState("/");

  const darkblue = "var(--dark-blue)";
  const lightgray = "var(--light-gray)";
  const typoLightGray = "light-gray";
  const typoDarkBlue = "dark-blue";

  const colorSVG = (uri) => {
    return location.pathname === uri ? darkblue : lightgray;
  };

  const colorTypo = (uri) => {
    return location.pathname === uri ? typoDarkBlue : typoLightGray;
  };

  const sm = useMediaQuery("(min-width: 360px) and (max-width:576px)");

  return (
    <>
      {sm && (
        <div className={styles.wrapper} {...props}>
          <nav>
            <ul className={styles.nav}>
              <li>
                <Link to="/">
                  <HomeSVG stroke={colorSVG("/")} width={26} height={23} />
                  <Typography variant="body-3-medium" color={colorTypo("/")}>
                    Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="transaction">
                  <OrderSVG stroke={colorSVG("/transaction")} />
                  <Typography
                    variant="body-3-medium"
                    color={colorTypo("/transaction")}
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
                  <SettingsSVG stroke={colorSVG("/register")} />
                  <Typography
                    variant="body-3-medium"
                    color={colorTypo("/register")}
                  >
                    Settings
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="user">
                  <ProfileSVG fill={colorSVG("/user")} />
                  <Typography
                    variant="body-3-medium"
                    color={colorTypo("/user")}
                  >
                    Profile
                  </Typography>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default BottomNav;
