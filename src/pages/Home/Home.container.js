import React, { useEffect, useState } from "react";
import HomeView from "./Home.view";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../utils/useMediaQuery";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../config/firebaseConfig";
import { SearchContext } from "../../context/SearchContext";
import useDebounce from "../../utils/useDebounce";
import { useContext } from "react";

const Home = () => {
  const { user, logout } = UserAuth();
  const [products, setProducts] = useState([]);
  const [zoom, setZoom] = useState(12);

  const [currentPageIndex, setCurrentPageIndex] = useState(2);
  const [pageNumber, setPageNumber] = useState(5);
  const [totalPageNumber, setTotalPageNumber] = useState(10);
  const [bounds, setBounds] = useState([]);

  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "product"), (snapshot) => {
        return setProducts(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      }),
    []
  );

  useEffect(() => {
    if (products)
      setBounds(products.map((el) => [el.location._lat, el.location._long]));
  }, [products]);

  console.log(bounds);

  const xl = useMediaQuery("(min-width: 1270px");
  const lg = useMediaQuery("(min-width: 800px) and (max-width: 1269px)");
  const md = useMediaQuery("(min-width: 600px) and (max-width: 799px)");
  const sm = useMediaQuery("(min-width: 360px) and (max-width: 599px");

  const columns = sm ? 2 : md ? 3 : lg ? 4 : 2;

  const handleOnClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };

  // global search value

  const { searchValue } = useContext(SearchContext);
  const debouncedValue = useDebounce(searchValue, 500);
  // const data = [];

  // for (let i = 0; i < 10; i++) {
  //   data.push({ id: i, lat: 49.225, long: -123.107, location: "Langara" });
  // }
  const generatedProps = {
    // generated props here
    handleLogOut,
    user,
    products,
    columns,
    lg,
    xl,
    zoom,
    currentPageIndex,
    pageNumber,
    totalPageNumber,
    bounds,
    handleOnClick,
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
