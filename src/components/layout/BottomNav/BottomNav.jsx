import React from "react";
import styles from "./bottomNav.module.css";
import { Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";
import { BsGear, BsFillPlusCircleFill } from "react-icons/bs";

const { nav } = styles;

const BottomNav = ({ ...props }) => {
  return (
    <div {...props}>
      <nav>
        <ul className={nav}>
          <li>
            <Link to="/">
              <AiOutlineHome fontSize="30px" />
              Home
            </Link>
          </li>
          <li>
            <Link to="transaction">
              <BiPackage fontSize="30px" />
              Orders
            </Link>
          </li>
          <li>
            <Link to="listing/add">
              <BsFillPlusCircleFill fontSize="30px" color={"#0b5cbb"} />
              Post
            </Link>
          </li>
          <li>
            <Link to="register">
              <BsGear fontSize="30px" />
              Settings
            </Link>
          </li>
          <li>
            <Link to="user">
              <AiOutlineUser fontSize="30px" />
              Profile
            </Link>
          </li>
          {/* <li>
            <Button
              variant="primary"
              size="md"
              onClickHandler={() => navigate("listing/add")}
            >
              Post Listing
            </Button>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
