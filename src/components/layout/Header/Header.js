import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { UserAuth } from "../../../context/AuthContext";
import Button from "../../base/Button/Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "../../base/SearchField/SearchField";
import { LuFilter } from "react-icons/lu";
import useWindowSize from "../../../utils/useWindowSize";
import { SearchContext } from "../../../context/SearchContext";
import { FilterSVG, LogoSVG } from "../../base/SVG";

const Header = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [size] = useWindowSize();

  const handleLogOut = async () => {
    await logout();
  };
  const { searchValue, updateSearchValue, resetSearchValue } =
    useContext(SearchContext);

  const handleInputChange = (event) => {
    updateSearchValue(event.target.value);
  };

  let headerContent;

  return (
    <header className={styles.header}>
      <div className={styles.mobileTitle}>
        <div className={styles.title}>
          <LogoSVG width="40vw" height="3.5vh" />
        </div>
        {size < 768 ? (
          <Button
            variant="dark-blue"
            size="sm"
            label="Logout"
            hoverable
            onClickHandler={handleLogOut}
          />
        ) : (
          <></>
        )}
      </div>
      <div className={styles.left}>
        <SearchField
          value={searchValue}
          resetValue={resetSearchValue}
          onChange={handleInputChange}
          placeholder="What are you looking for?"
        />
        <FilterSVG height={20} width={25} fill={"var(--white)"} />
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
          {user && (
            <li>
              <Button
                variant="dark-blue"
                size="sm"
                label="Logout"
                hoverable
                onClickHandler={handleLogOut}
              />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
