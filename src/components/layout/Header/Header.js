import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { UserAuth } from "../../../context/AuthContext";
import Button from "../../base/Button/Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchField from "../../base/SearchField/SearchField";
import { SearchContext } from "../../../context/SearchContext";
import { FilterSVG, LogoSVG } from "../../base/SVG";
import useMediaQuery from "../../../utils/useMediaQuery";

const Header = () => {
  const { user, logout } = UserAuth();
  const [filterSelected, setFilterSelected] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logout();
  };
  const { searchValue, updateSearchValue, resetSearchValue } =
    useContext(SearchContext);

  const handleInputChange = (event) => {
    updateSearchValue(event.target.value);
  };

  const location = useLocation();

  const handleLogin = () => {
    navigate("/login");
  };

  const sm = useMediaQuery("(min-width: 360px) and (max-width:576px)");
  const md = useMediaQuery("(min-width: 577px) and (max-width:799px)");
  const lg = useMediaQuery("(min-width: 800px) and (max-width:1270px)");
  const xl = useMediaQuery("(min-width: 1271px");

  let headerSm = () => {
    return (
      <div className={styles.mobileWrapper}>
        <div className={styles.mobileTitle}>
          <LogoSVG width={150} height={31} />
          <Button
            variant="light-blue"
            size="sm"
            label={user ? "Logout" : "Login"}
            hoverable
            onClickHandler={user ? handleLogOut : handleLogin}
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

  let headerMd = () => {
    return (
      <div className={styles.mdWrapper}>
        <div className={styles.mdTop}>
          <div className={styles.logo} style={{ marginRight: "41px" }}>
            <LogoSVG width={200} height={41} />
          </div>
          <div className={styles.mdRightButtons}>
            <Button
              variant="yellow"
              hoverable
              size="sm"
              onClickHandler={() => navigate("listing/add")}
              label="Post Listing"
            />
            <Button
              variant="light-blue"
              size="sm"
              label={user ? "Logout" : "Login"}
              hoverable
              onClickHandler={user ? handleLogOut : handleLogin}
            />
          </div>
        </div>
        <div className={styles.mdMid}>
          <ul>
            <li>
              <Link
                style={
                  location.pathname === "/"
                    ? { color: "var(--yellow)", fontWeight: "bold" }
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
                    ? { color: "var(--yellow)", fontWeight: "bold" }
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
                    ? { color: "var(--yellow)", fontWeight: "bold" }
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
                    ? { color: "var(--yellow)", fontWeight: "bold" }
                    : { color: "var(--white)" }
                }
                to="user"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.mdBot}>
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

  let headerLg = () => {
    return (
      <div className={styles.lgWrapper}>
        <div className={styles.lgTop}>
          <div className={styles.logo} style={{ marginRight: "41px" }}>
            <LogoSVG width={200} height={41} />
          </div>
          <div className={styles.lgRightButtons}>
            <Button
              variant="yellow"
              hoverable
              size="sm"
              onClickHandler={() => navigate("listing/add")}
              label="Post Listing"
            />
            <Button
              variant="light-blue"
              size="sm"
              label={user ? "Logout" : "Login"}
              hoverable
              onClickHandler={user ? handleLogOut : handleLogin}
            />
          </div>
        </div>
        <div className={styles.lgBot}>
          <div className={styles.lgNavLeft}>
            <ul>
              <li>
                <Link
                  style={
                    location.pathname === "/"
                      ? { color: "var(--yellow)", fontWeight: "bold" }
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
                      ? { color: "var(--yellow)", fontWeight: "bold" }
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
                      ? { color: "var(--yellow)", fontWeight: "bold" }
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
                      ? { color: "var(--yellow)", fontWeight: "bold" }
                      : { color: "var(--white)" }
                  }
                  to="user"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.lgFilterRight}>
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
                    ? { color: "var(--yellow)", fontWeight: "bold" }
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
                    ? { color: "var(--yellow)", fontWeight: "bold" }
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
                    ? { color: "var(--yellow)", fontWeight: "bold" }
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
                    ? { color: "var(--yellow)", fontWeight: "bold" }
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
            <li>
              <Button
                variant="light-blue"
                size="sm"
                label={user ? "Logout" : "Login"}
                hoverable
                onClickHandler={user ? handleLogOut : handleLogin}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  };
  let content = sm
    ? headerSm()
    : md
    ? headerMd()
    : lg
    ? headerLg()
    : xl
    ? headerXl()
    : headerXl();

  return <>{content}</>;
};

export default Header;
