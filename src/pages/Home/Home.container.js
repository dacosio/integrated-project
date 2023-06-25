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
import { usePosition } from "../../utils/usePosition";
import { useCollection } from "react-firebase-hooks/firestore";

const Home = () => {
  const { user, logout } = UserAuth();
  const [products, setProducts] = useState([]);
  const [zoom, setZoom] = useState(12);

  const [currentPageIndex, setCurrentPageIndex] = useState(2);
  const [pageNumber, setPageNumber] = useState(5);
  const [totalPageNumber, setTotalPageNumber] = useState(10);
  const [bounds, setBounds] = useState([[49.225693, -123.107326]]);

  const [value, loading, err] = useCollection(collection(db, "product"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    if (value) {
      setProducts(value.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setBounds(
        value.docs.map((doc) => [
          doc.data().location._lat,
          doc.data().location._long,
        ])
      );
    }
  }, [value]);

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

  const { latitude, longitude, error } = usePosition();

  const generatedProps = {
    // generated props here
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
    latitude,
    longitude,
    error,
    handleLogOut,
    handleOnClick,
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
