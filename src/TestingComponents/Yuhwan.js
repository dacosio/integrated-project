import React, { useState } from "react";
import Page from "../components/base/Page/Page";
import Pagination from "../components/base/Pagination/Pagination";
import SingleImageInput from "../components/base/SingleImageInput/SingleImageInput";

const Yuhwan = (props) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [pageNumber, setPageNumber] = useState(5);
  const [totalPageNumber, setTotalPageNumber] = useState();
  const [items, setItems] = useState([]);

  const [singleImage, setSingleImage] = useState([]);

  const itemNumber = 10;
  const columns = ["id", "category", "title", "price"];

  const SingleImageInputStyles = {
    width: "30%",
  };

  useState(() => {
    fetch(
      `https://dummyjson.com/products?limit=${itemNumber}&skip=0&select=category,title,price`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data.products);
      });

    fetch(
      `https://dummyjson.com/products?limit=0&skip=0&select=category,title,price`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTotalPageNumber(Math.ceil(data.products.length / itemNumber));
      });
  }, []);

  const handleOnClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
    fetch(
      `https://dummyjson.com/products?limit=${itemNumber}&skip=${
        (pageIndex - 1) * itemNumber
      }&select=category,title,price`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data.products);
      });

    fetch(
      `https://dummyjson.com/products?limit=0&skip=0&select=category,title,price`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTotalPageNumber(Math.ceil(data.products.length / itemNumber));
      });
  };

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <div>
        <h2>Page</h2>
        <Page items={items} columns={columns} />
        <h2>Pagination - for desktop</h2>
        <Pagination
          currentPageIndex={currentPageIndex}
          pageNumber={pageNumber}
          totalPageNumber={totalPageNumber}
          onClick={handleOnClick}
        />
        <h2>Pagination - for mobile</h2>
        <Pagination
          currentPageIndex={currentPageIndex}
          pageNumber={pageNumber}
          totalPageNumber={totalPageNumber}
          previousButtonLabel="<"
          nextButtonLabel=">"
          onClick={handleOnClick}
        />
      </div>
      <div style={SingleImageInputStyles}>
        <h2>SingleImageInput</h2>
        <SingleImageInput
          images={singleImage}
          setImages={setSingleImage}
        ></SingleImageInput>
      </div>
    </div>
  );
};

export default Yuhwan;
