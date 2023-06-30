import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";
import useWindowSize from "../../../utils/useWindowSize";
import { useEffect } from "react";
const bottomNavStyle = {
  position: "absolute",
  left: 0,
  bottom: 0,
  right: 0,
};

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    const body = document.querySelector("body");
    if (location.pathname === "/login") {
      body.style.backgroundColor = "var(--dark-blue)"; // Set the desired background color for the login page
    } else if (location.pathname === "/register") {
      body.style.background =
        "linear-gradient(90deg,var(--dark-blue) 60% , var(--yellow) 60%)";
    } else {
      body.style.backgroundColor = "white"; // Set the desired background color for other pages
    }
    console.log(location.pathname);

    return () => {
      body.style.backgroundColor = ""; // Reset the background color when the component unmounts
    };
  }, [location.pathname]);

  return (
    <div>
      <header style={{ position: "sticky", top: 0, zIndex: 5 }}>
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <></>
        ) : (
          <Header />
        )}
      </header>
      <main className="App">
        <Outlet />
      </main>
      <div
        style={{
          position: "fixed",
          bottom: 10,
          zIndex: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <></>
        ) : (
          <BottomNav />
        )}
      </div>
    </div>
  );
};

export default Layout;
