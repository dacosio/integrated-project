import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { UserAuth } from "../../../context/AuthContext";
import Button from "../../base/Button/Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "../../base/SearchField/SearchField";
import { LuFilter } from "react-icons/lu";
import { SearchContext } from "../../../context/SearchContext";

const Header = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
  };
  const { searchValue, updateSearchValue, resetSearchValue } =
    useContext(SearchContext);
  const handleInputChange = (event) => {
    updateSearchValue(event.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <div className={styles.title}>SplitShare</div>
        <SearchField
          value={searchValue}
          resetValue={resetSearchValue}
          onChange={handleInputChange}
          placeholder="What are you looking for?"
        />
        <LuFilter style={{ fontSize: "25px" }} />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="transaction">Orders</Link>
          </li>
          <li>
            <Link to="register">Settings</Link>
          </li>
          <li>
            <Link to="user">Profile</Link>
          </li>
          <li>
            <Button
              variant="primary"
              size="md"
              onClickHandler={() => navigate("listing/add")}
            >
              Post Listing
            </Button>
          </li>
          {/* <li>
            <Button
              onClickHandler={handleLogOut}
              variant="gray"
              size="md"
              label="Logout"
            />
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
