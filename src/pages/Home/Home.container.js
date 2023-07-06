/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import HomeView from "./Home.view";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "../../utils/useMediaQuery";
import {
  query,
  collection,
  orderBy,
  getDocs,
  limit,
  startAfter,
  onSnapshot,
} from "firebase/firestore";
import db from "../../config/firebaseConfig";
import { SearchContext } from "../../context/SearchContext";
import useDebounce from "../../utils/useDebounce";
import { useContext } from "react";
import { usePosition } from "../../utils/usePosition";
import { Category } from "../../context/CategoryContext";
import Geocode from "react-geocode";
import { Sort } from "../../context/SortContext";

const Home = () => {
  const { user, logout } = UserAuth();
  const [zoom, setZoom] = useState(12);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const pageNumber = 5;
  const itemNumber = 4;

  const xl = useMediaQuery("(min-width: 1270px");
  const lg = useMediaQuery("(min-width: 800px) and (max-width: 1269px)");
  const md = useMediaQuery("(min-width: 600px) and (max-width: 799px)");
  const sm = useMediaQuery("(min-width: 360px) and (max-width: 599px");

  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };

  // global search value
  const { searchValue } = useContext(SearchContext);
  const debouncedValue = useDebounce(searchValue, 500);

  //global category value
  const { categoryValue } = Category();

  // global sort value
  const { sortValue } = Sort();

  console.log(sortValue);

  // /**************** */
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "product"), (snapshot) => {
      let newProducts = snapshot.docs
        .filter((doc) => {
          return doc.data().lat !== undefined && doc.data().long !== undefined;
        })
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

      if (!!debouncedValue && categoryValue.length > 0) {
        const result = newProducts.filter(
          (n) =>
            n.categoryValue
              .toLowerCase()
              .includes(categoryValue[0]?.value.toLowerCase()) &&
            n.name.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setProducts(result);
      } else if (!!debouncedValue) {
        const result = newProducts.filter((n) =>
          n.name.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setProducts(result);
      } else if (categoryValue.length > 0) {
        const result = newProducts.filter((n) =>
          n.categoryValue
            .toLowerCase()
            .includes(categoryValue[0]?.value.toLowerCase())
        );
        setProducts(result);
      } else if (sortValue) {
        if (sortValue === "lowToHigh") {
          newProducts.sort((a, b) => a.price - b.price);
          setProducts(newProducts);
        } else if (sortValue === "highToLow") {
          newProducts.sort((a, b) => b.price - a.price);
          setProducts(newProducts);
        }
      } else {
        setProducts(newProducts);
      }
    });

    return () => unsubscribe();
  }, [debouncedValue, categoryValue, sortValue]);

  // ********************************

  const totalPageNumber = Math.ceil(products.length / pageNumber);

  const desktopProducts = products.slice(
    itemNumber * currentPageIndex - itemNumber,
    itemNumber * currentPageIndex
  );
  const mobileProducts = products.slice(0, itemNumber * currentPageIndex);

  const desktopBounds =
    desktopProducts.length !== 0
      ? desktopProducts.map((product) => [
          product.location._lat,
          product.location._long,
        ])
      : [[49.225693, -123.107326]];
  const mobileBounds =
    mobileProducts.length !== 0
      ? mobileProducts.map((product) => [
          product.location._lat,
          product.location._long,
        ])
      : [[49.225693, -123.107326]];

  useEffect(() => {
    if (currentPageIndex === totalPageNumber) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [currentPageIndex, totalPageNumber]);

  const handleOnScroll = () => {
    if (currentPageIndex < totalPageNumber) {
      setCurrentPageIndex((oldData) => oldData + 1);
    }
  };

  const columns = sm ? 2 : md ? 3 : lg ? 4 : xl ? 5 : 2;

  const handleOnClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };

  const { latitude, longitude, error } = usePosition();

  const [currentAddress, setCurrentAddress] = useState("");

  Geocode.setApiKey(process.env.REACT_APP_MAPS_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setRegion("ca");
  Geocode.fromLatLng(latitude, longitude).then(
    (response) => {
      const address = response.results[0].formatted_address;
      setCurrentAddress(address);
    },
    (error) => {
      console.error(error);
    }
  );

  const [toggleDisplay, setToggleDisplay] = useState(true);

  const toggleDisplayHandler = () => {
    setToggleDisplay(!toggleDisplay);
  };

  const generatedProps = {
    user,
    desktopProducts,
    mobileProducts,
    hasMore,
    columns,
    lg,
    xl,
    zoom,
    currentPageIndex,
    pageNumber,
    totalPageNumber,
    desktopBounds,
    mobileBounds,
    latitude,
    longitude,
    error,
    handleLogOut,
    handleOnClick,
    handleOnScroll,
    categories,
    currentAddress,
    toggleDisplayHandler,
    toggleDisplay,
    debouncedValue,
    categoryValue,
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
