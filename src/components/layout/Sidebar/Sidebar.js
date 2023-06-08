import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { scaleRotate as Menu } from "react-burger-menu";

const Sidebar = () => {
  return (
    <Menu right>
      <nav>
        <ul>
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="transaction">Orders</Link>
          </li>
          <li className="menu-item">
            <Link to="register">Settings</Link>
          </li>
          <li className="menu-item">
            <Link to="user">Profile</Link>
          </li>
        </ul>
      </nav>
    </Menu>
  );
};

export default Sidebar;
