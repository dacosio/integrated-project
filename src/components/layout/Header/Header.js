import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { UserAuth } from "../../../context/AuthContext";
import Button from "../../base/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "../../base/SearchField/SearchField";
import { LuFilter } from "react-icons/lu";
import useWindowSize from "../../../utils/useWindowSize";

const Header = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [size] = useWindowSize();
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchReset = () => {
    setSearchValue("");
  };
  const handleLogOut = async () => {
    await logout();
  };

  return (
    <header className={styles.header}>
      <div className={styles.mobileTitle}>
        <div className={styles.title}>SplitShare</div>
        {size < 768 ? (
          <Button
            onClickHandler={handleLogOut}
            variant="gray"
            size="md"
            label="Logout"
          />
        ) : (
          <></>
        )}
      </div>
      <div className={styles.left}>
        <SearchField
          value={searchValue}
          resetValue={handleSearchReset}
          onChange={handleSearchChange}
          placeholder="What are you looking for?"
        />
        <LuFilter style={{ fontSize: "35px", color: "white" }} />
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
          <li>
            <Button
              onClickHandler={handleLogOut}
              variant="gray"
              size="md"
              label="Logout"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
