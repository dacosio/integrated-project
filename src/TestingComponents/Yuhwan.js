import React, { useState } from "react";
import Page from "../components/base/Page/Page";
import Pagination from "../components/base/Pagination/Pagination";

const Yuhwan = (props) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [pageNumber, setPageNumber] = useState(5);
  const [totalPageNumber, setTotalPageNumber] = useState();
  const [items, setItems] = useState([]);

  const itemNumber = 10;
  const columns = ["id", "category", "title", "price"];

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

  // *Only for test from here
  const handleOnChange = (event) => {
    setPageNumber(event.target.value);
  };
  // to here

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      {/* *Only for test from here */}
      <div>*Only for test</div>
      <input
        type="number"
        onChange={handleOnChange}
        defaultValue={pageNumber}
        step={2}
        min={1}
      ></input>
      {/* to here */}
      <Page items={items} columns={columns} />
      <div>For desktop</div>
      <Pagination
        currentPageIndex={currentPageIndex}
        pageNumber={pageNumber}
        totalPageNumber={totalPageNumber}
        onClick={handleOnClick}
      />
      <div>For mobile</div>
      <Pagination
        currentPageIndex={currentPageIndex}
        pageNumber={pageNumber}
        totalPageNumber={totalPageNumber}
        previousButtonLabel="<"
        nextButtonLabel=">"
        onClick={handleOnClick}
      />
    </div>
  );
};

export default Yuhwan;
