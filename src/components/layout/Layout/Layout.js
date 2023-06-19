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
  const [size] = useWindowSize();
  console.log(size);

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 5 }}>
        <Header />
      </header>
      <main className="App">
        <Outlet />
      </main>
      <BottomNav style={bottomNavStyle} />
    </>
  );
};

export default Layout;
