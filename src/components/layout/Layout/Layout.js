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
<<<<<<< HEAD
      <Header />
=======
      <header style={{ position: "sticky", top: 0, zIndex: 5 }}>
        <Header />
      </header>
>>>>>>> cff3a55ccd583e56622dec5021b4fafeceeb5908
      <main className="App">
        <Outlet />
      </main>
      <div style={{ position: "sticky", bottom: 0, zIndex: 5 }}>
        <BottomNav style={bottomNavStyle} />
      </div>
    </>
  );
};

export default Layout;
