import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { UserAuth } from "../../../context/AuthContext";
import Button from "../../base/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "../../base/SearchField/SearchField";
import { LuFilter } from "react-icons/lu";
import useWindowSize from "../../../utils/useWindowSize";
import Sidebar from "../Sidebar/Sidebar";

const Header = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [width] = useWindowSize();
  const [searchValue, setSearchValue] = useState("");
  console.log(width);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchReset = () => {
    setSearchValue("");
  };
  // const handleLogOut = async () => {
  //   await logout();
  // };

  return (
    <header id="Header" className={styles.header}>
      <div className={styles.left}>
        <div className={styles.title}>SplitShare</div>
        <SearchField
          value={searchValue}
          resetValue={handleSearchReset}
          onChange={handleSearchChange}
          placeholder="What are you looking for?"
        />
        <LuFilter style={{ fontSize: "25px" }} />
      </div>
    </header>
  );
};

export default Header;
