import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import db from "../config/firebaseConfig";
import InfinitePagination from "../components/base/InfinitePagination/InfinitePagination";
import useMediaQuery from "../utils/useMediaQuery";
import InfiniteScroll from "react-infinite-scroll-component";

const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }

  const onHandlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onHandleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const lastPage = Math.ceil(totalProducts / productsPerPage);

  return (
    <div>
      {currentPage !== 1 && <button onClick={onHandlePrevious}>Prev</button>}
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
      {currentPage !== lastPage && <button onClick={onHandleNext}>Next</button>}
    </div>
  );
};

const PaginationSample = () => {
  // start of pagination
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "product"), (snapshot) => {
      const newProducts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(newProducts);
    });

    return () => unsubscribe();
  }, []);

  // ex. currentPage is 2 and postsPerPage is 20, so the lastsPostIndex is index 20.
  const lastProductIndex = currentPage * productsPerPage;
  // ex. lastPostIndex is 20 and postsPerPage is 20, so the firstPostIndex is 10.
  const firstPostIndex = lastProductIndex - productsPerPage;

  // hide the data that we dont want to see.
  const currentProducts = products.slice(firstPostIndex, lastProductIndex);
  const infiniteProducts = products.slice(0, lastProductIndex);
  //   console.log(currentProducts, infiniteProducts);
  // end of pagination

  const xl = useMediaQuery("(min-width: 1270px");

  const lastPage = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    if (currentPage === lastPage) setHasMore(false);
    else setHasMore(true);
  }, [currentPage]);

  return (
    <div>
      {xl && (
        <>
          <div>
            <ul>
              {currentProducts &&
                currentProducts.map((product) => {
                  return <li key={product.id}>{product.name}</li>;
                })}
            </ul>
          </div>
          <Pagination
            totalProducts={products.length}
            productsPerPage={productsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
      {!xl && (
        <InfiniteScroll
          dataLength={infiniteProducts.length}
          next={() => {
            console.log("Scrolling..");
            setCurrentPage((prev) => prev + 1);
          }}
          hasMore={hasMore}
          height={100}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {infiniteProducts.map((product) => (
            <div
              style={{
                height: 30,
                border: "1px solid green",
                margin: 6,
                padding: 8,
              }}
              key={product.id}
            >
              <h3>{product.name}</h3>
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default PaginationSample;
