import React, { useState, useEffect } from "react";
import styles from "./PageTabs.module.css";

const { ordertabs, active } = styles;

const PageTabs = ({ item1, item2, item3, item4 }) => {
  const menuItems = {
    all: ["Pending", "Confirmed", "Completed", "Cancelled"],
    buying: ["Pending", "Completed", "Cancelled"],
    selling: ["Requested", "Completed", "Cancelled"],
  };
  const [activeLink, setActiveLink] = useState(item1);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    console.log(activeLink);
  }, [activeLink]);

  return (
    <ul className={ordertabs}>
      <li
        className={activeLink === item1 ? active : ""}
        onClick={() => handleLinkClick(item1)}
      >
        <a href="#item1">{item1}</a>
      </li>
      <li className={activeLink === item2 ? active : ""}>
        <a href="#item2" onClick={() => handleLinkClick(item2)}>
          {item2}
        </a>
      </li>
      <li className={activeLink === item3 ? active : ""}>
        <a href="#item3" onClick={() => handleLinkClick(item3)}>
          {item3}
        </a>
      </li>
      <li className={activeLink === item4 ? active : ""}>
        <a href="#item4" onClick={() => handleLinkClick(item4)}>
          {item4}
        </a>
      </li>
    </ul>
  );
};

export default PageTabs;
