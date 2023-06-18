import React, { useState, useEffect } from "react";
import "./PageTabs.css";

const PageTabs = ({ primary, item1, item2, item3 }) => {
  const [activeLink, setActiveLink] = useState(item1);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    console.log(activeLink);
  }, [activeLink]);

  const layout = primary ? "li-primary" : "li-secondary";

  return (
    <nav>
      <ul>
        <li
          className={[activeLink === item1 ? "active" : "", layout].join(' ')}
        >
          <a href="#item1" onClick={() => handleLinkClick(item1)}>
            {item1}
          </a>
        </li>
        <li
          className={[activeLink === item2 ? "active" : "", layout].join(' ')}
        >
          <a href="#item2" onClick={() => handleLinkClick(item2)}>
            {item2}
          </a>
        </li>
        <li
          className={[activeLink === item3 ? "active" : "", layout].join(' ')}
        >
          <a href="#item3" onClick={() => handleLinkClick(item3)}>
            {item3}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PageTabs;