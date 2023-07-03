import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import db from "../config/firebaseConfig";
import InfinitePagination from "../components/base/InfinitePagination/InfinitePagination";
import useMediaQuery from "../utils/useMediaQuery";

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

  // end of pagination

  const xl = useMediaQuery("(min-width: 1270px");

  //   useEffect(() => {
  //     setProductsPerPage(4);
  //   }, [xl]);

  //   useEffect(() => {
  //     if (products.length < productsPerPage) {
  //       setHasMore(false);
  //     }
  //   }, [productsPerPage]);

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
        <InfinitePagination
          columns={1}
          items={currentProducts?.map((p) => {
            return <div key={p.id}>{p.name}</div>;
          })}
          hasMore={true}
          onScroll={() => setProductsPerPage((prev) => prev + 4)}
        />
      )}
    </div>
  );
};

export default PaginationSample;
