import React from "react";
import HomeView from "./Home.view";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import useMediaQuery from "../../utils/useMediaQuery";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../config/firebaseConfig";
import { SearchContext } from "../../context/SearchContext";
import useDebounce from "../../utils/useDebounce";
import { useContext } from "react";
>>>>>>> cff3a55ccd583e56622dec5021b4fafeceeb5908

const Home = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };
<<<<<<< HEAD
=======

  useEffect(
    () =>
      onSnapshot(collection(db, "product"), (snapshot) => {
        return setProducts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  const data = [];

  for (let i = 0; i < 10; i++) {
    data.push({ id: i, lat: 49.225, long: -123.107, location: "Langara" });
  }

  const xl = useMediaQuery("(min-width: 1201px");
  const lg = useMediaQuery("(min-width: 800px) and (max-width: 1200px)");
  const md = useMediaQuery("(min-width: 600px) and (max-width: 799px)");
  const sm = useMediaQuery("(min-width: 360px) and (max-width: 599px");

  const columns = sm ? 2 : md ? 3 : lg ? 4 : 2;

  const handleOnClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };

  // global search value

  const { searchValue } = useContext(SearchContext);
  const debouncedValue = useDebounce(searchValue, 500);

  console.log(debouncedValue);

>>>>>>> cff3a55ccd583e56622dec5021b4fafeceeb5908
  const generatedProps = {
    // generated props here
    handleLogOut,
    user,
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
