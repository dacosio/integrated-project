import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { UserAuth } from "../../../context/AuthContext";
import Button from "../../base/Button/Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "../../base/SearchField/SearchField";
import useWindowSize from "../../../utils/useWindowSize";
import { SearchContext } from "../../../context/SearchContext";
import { FilterSVG, LogoSVG } from "../../base/SVG";
import useMediaQuery from "../../../utils/useMediaQuery";
import Grid from "../Grid/Grid";

const Header = () => {
  const { user, logout } = UserAuth();
  const [filterSelected, setFilterSelected] = useState(false);
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

  const location = useLocation();

  // const sm = useMediaQuery("(min-width: 360px) and (max-width: 599px)");
  const sm = useMediaQuery("(min-width: 360px) and (max-width:1270x)");
  const xl = useMediaQuery("(min-width: 1271px");

  let headerMobile = () => {
    return (
      <div className={styles.mobileWrapper}>
        <div className={styles.mobileTitle}>
          <LogoSVG width={150} height={31} />
          <Button
            variant="light-blue"
            size="sm"
            label="Logout"
            hoverable
            onClickHandler={handleLogOut}
          />
        </div>
        <div className={styles.mobileFilter}>
          <SearchField
            value={searchValue}
            resetValue={resetSearchValue}
            onChange={handleInputChange}
            placeholder="What are you looking for?"
          />
          <FilterSVG
            height={22}
            width={25}
            fill={"var(--white)"}
            selected={filterSelected}
            onClick={() => setFilterSelected(!filterSelected)}
          />
        </div>
      </div>
    );
  };

  let headerXl = () => {
    return (
      <div className={styles.xlWrapper}>
        <div className={styles.xlLeft}>
          <div style={{ marginRight: "41px" }}>
            <LogoSVG width={200} height={41} />
          </div>

          <SearchField
            value={searchValue}
            resetValue={resetSearchValue}
            onChange={handleInputChange}
            placeholder="What are you looking for?"
          />
          <FilterSVG
            height={22}
            width={25}
            fill={"var(--white)"}
            selected={filterSelected}
            onClick={() => setFilterSelected(!filterSelected)}
          />
        </div>
        <div className={styles.xlRight}>
          <ul>
            <li>
              <Link
                style={
                  location.pathname === "/"
                    ? { color: "var(--yellow)" }
                    : { color: "var(--white)" }
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={
                  location.pathname === "/transaction"
                    ? { color: "var(--yellow)" }
                    : { color: "var(--white)" }
                }
                to="transaction"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                style={
                  location.pathname === "/register"
                    ? { color: "var(--yellow)" }
                    : { color: "var(--white)" }
                }
                to="register"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                style={
                  location.pathname === "/user"
                    ? { color: "var(--yellow)" }
                    : { color: "var(--white)" }
                }
                to="user"
              >
                Profile
              </Link>
            </li>
            <li>
              <Button
                variant="yellow"
                hoverable
                size="sm"
                onClickHandler={() => navigate("listing/add")}
                label="Post Listing"
              />
            </li>
            {user && (
              <li>
                <Button
                  variant="light-blue"
                  size="sm"
                  label="Logout"
                  hoverable
                  onClickHandler={handleLogOut}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  };

  let content = sm ? headerMobile() : xl ? headerXl() : headerMobile();

  return <>{content}</>;
};

export default Header;
