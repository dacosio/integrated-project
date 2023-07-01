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

const Home = () => {
  const { user, logout } = UserAuth();

  const [zoom, setZoom] = useState(12);
  const [bounds, setBounds] = useState([[49.225693, -123.107326]]);
  const [categories, setCategories] = useState([]);
  const [totalProducts, setTotalProducts] = useState([]);
  const [products, setProducts] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [pageNumber, setPageNumber] = useState(5);
  const [totalPageNumber, setTotalPageNumber] = useState();
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

  useEffect(() => {
    onSnapshot(
      query(collection(db, "product"), orderBy("createdAt", "desc")),
      (snapshot) => {
        setTotalPageNumber(Math.ceil(snapshot.docs.length / itemNumber));
        setTotalProducts(snapshot.docs);
      }
    );
  }, []);

  useEffect(() => {
    const pagination = async () => {
      if (totalProducts.length !== 0) {
        if (1 < currentPageIndex) {
          if (xl) {
            const _pagedProducts = totalProducts.slice(
              itemNumber * (currentPageIndex - 1),
              itemNumber * (currentPageIndex - 1) + itemNumber
            );

            const _products = await Promise.all(
              _pagedProducts.map(async (product) => {
                return getDocs(
                  collection(db, "product", product.id, "image")
                ).then((imageResponse) => {
                  const image = imageResponse.docs.filter(
                    (doc) => doc.data().isCover === true
                  );

                  return {
                    ...product.data(),
                    id: product.id,
                    imageUrl:
                      0 < image.length ? image[0].data().imageUrl : null,
                  };
                });
              })
            );

            setProducts(_products);
            setBounds(
              _pagedProducts.map((product) => [
                product.data().location._lat,
                product.data().location._long,
              ])
            );
          } else {
            const _pagedProducts = totalProducts.slice(
              0,
              itemNumber * (currentPageIndex - 1) + itemNumber
            );

            const _products = await Promise.all(
              _pagedProducts.map(async (product) => {
                return getDocs(
                  collection(db, "product", product.id, "image")
                ).then((imageResponse) => {
                  const image = imageResponse.docs.filter(
                    (doc) => doc.data().isCover === true
                  );

                  return {
                    ...product.data(),
                    id: product.id,
                    imageUrl:
                      0 < image.length ? image[0].data().imageUrl : null,
                  };
                });
              })
            );

            setProducts(_products);
            setBounds(
              _pagedProducts.map((product) => [
                product.data().location._lat,
                product.data().location._long,
              ])
            );
          }
        } else {
          const _pagedProducts = totalProducts.slice(0, itemNumber);

          const _products = await Promise.all(
            _pagedProducts.map(async (product) => {
              return getDocs(
                collection(db, "product", product.id, "image")
              ).then((imageResponse) => {
                const image = imageResponse.docs.filter(
                  (doc) => doc.data().isCover === true
                );

                return {
                  ...product.data(),
                  id: product.id,
                  imageUrl: 0 < image.length ? image[0].data().imageUrl : null,
                };
              });
            })
          );

          setProducts(_products);
          setBounds(
            _pagedProducts.map((product) => [
              product.data().location._lat,
              product.data().location._long,
            ])
          );
        }
      }

      if (currentPageIndex === totalPageNumber) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    };

    pagination();
  }, [xl, totalProducts, currentPageIndex]);

  const handleOnScroll = () => {
    setCurrentPageIndex((oldData) => oldData + 1);
  };

  const columns = sm ? 2 : md ? 3 : lg ? 4 : 2;

  const handleOnClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };

  // global search value
  const { searchValue } = useContext(SearchContext);
  const debouncedValue = useDebounce(searchValue, 500);

  //global category value
  const { categoryValue } = Category();

  // console.log(debouncedValue);
  // console.log(categoryValue);

  const { latitude, longitude, error } = usePosition();

  const generatedProps = {
    user,
    products,
    hasMore,
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
    handleOnScroll,
    categories,
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
