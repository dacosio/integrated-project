import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import BottomNav from "../BottomNav/BottomNav";
import useWindowSize from "../../../utils/useWindowSize";

const bottomNavStyle = {
  position: "absolute",
  left: 0,
  bottom: 0,
  right: 0,
};

const Layout = () => {
  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 5 }}>
        <Header />
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
        <BottomNav />
      </div>
    </>
  );
};

export default Layout;
