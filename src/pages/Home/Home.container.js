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

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [pageNumber, setPageNumber] = useState(5);
  const [totalPageNumber, setTotalPageNumber] = useState();

  const itemNumber = 4;

  // const [value, loading, err] = useCollection(
  //   query(collection(db, "product"), orderBy("createdAt", "desc")),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    /* whole items */
    getDocs(query(collection(db, "product"), orderBy("createdAt", "desc")))
      .then((productsResponse) => {
        setTotalPageNumber(
          Math.ceil(productsResponse.docs.length / itemNumber)
        );

        if (currentPageIndex === totalPageNumber) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }

        if (1 < currentPageIndex) {
          /* item for cursor */
          getDocs(
            query(
              collection(db, "product"),
              orderBy("createdAt", "desc"),
              limit(itemNumber * (currentPageIndex - 1))
            )
          )
            .then((_productsResponse) => {
              const docs = [];
              _productsResponse.docs.forEach((doc) => {
                docs.push(doc);
              });

              /* paged items for esktop */
              getDocs(
                query(
                  collection(db, "product"),
                  orderBy("createdAt", "desc"),
                  startAfter(docs[docs.length - 1]),
                  limit(itemNumber)
                )
              )
                .then(async (__productsResponse) => {
                  const products = await Promise.all(
                    __productsResponse.docs.map(async (doc) => {
                      return getDocs(
                        collection(db, "product", doc.id, "image")
                      ).then((imageResponse) => {
                        const image = imageResponse.docs.filter(
                          (doc) => doc.data().isCover === true
                        );

                        return {
                          ...doc.data(),
                          id: doc.id,
                          imageUrl:
                            0 < image.length ? image[0].data().imageUrl : null,
                        };
                      });
                    })
                  );

                  setProducts(products);
                  setBounds(
                    __productsResponse.docs.map((doc) => [
                      doc.data().location._lat,
                      doc.data().location._long,
                    ])
                  );
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });

          /* paged items for mobile, tablet */
          getDocs(
            query(
              collection(db, "product"),
              orderBy("createdAt", "desc"),
              limit(itemNumber * currentPageIndex)
            )
          )
            .then(async (_productsResponse) => {
              const products = await Promise.all(
                _productsResponse.docs.map(async (doc) => {
                  return getDocs(
                    collection(db, "product", doc.id, "image")
                  ).then((imageResponse) => {
                    const image = imageResponse.docs.filter(
                      (doc) => doc.data().isCover === true
                    );

                    return {
                      ...doc.data(),
                      id: doc.id,
                      imageUrl:
                        0 < image.length ? image[0].data().imageUrl : null,
                    };
                  });
                })
              );

              setMobileProducts(products);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          /* paged items */
          getDocs(
            query(
              collection(db, "product"),
              orderBy("createdAt", "desc"),
              limit(itemNumber)
            )
          )
            .then(async (_productsResponse) => {
              const products = await Promise.all(
                _productsResponse.docs.map(async (doc) => {
                  return getDocs(
                    collection(db, "product", doc.id, "image")
                  ).then((imageResponse) => {
                    const image = imageResponse.docs.filter(
                      (doc) => doc.data().isCover === true
                    );

                    return {
                      ...doc.data(),
                      id: doc.id,
                      imageUrl:
                        0 < image.length ? image[0].data().imageUrl : null,
                    };
                  });
                })
              );

              setProducts(products);
              setBounds(
                _productsResponse.docs.map((doc) => [
                  doc.data().location._lat,
                  doc.data().location._long,
                ])
              );
              setMobileProducts(products);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPageIndex]);

  const handleOnScroll = () => {
    setCurrentPageIndex((oldData) => oldData + 1);
  };

  // useEffect(() => {
  // if (value) {
  //   console.log(value.docs.length);
  //   setProducts(value.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   setBounds(
  //     value.docs.map((doc) => [
  //       doc.data().location._lat,
  //       doc.data().location._long,
  //     ])
  //   );
  // }
  // }, [value]);

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

  //global category value
  const { categoryValue } = Category();

  console.log(debouncedValue);
  console.log(categoryValue);

  const { latitude, longitude, error } = usePosition();

  const generatedProps = {
    // generated props here
    user,
    products,
    mobileProducts,
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
