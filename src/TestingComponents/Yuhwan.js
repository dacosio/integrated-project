import React, { useState } from "react";
import Pagination from "../components/base/Pagination/Pagination";

const Yuhwan = (props) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(15);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [totalPageNumber, setTotalPageNumber] = useState(30);

  const handleOnClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };

  const handleOnChange = (event) => {
    setMaxPageNumber(event.target.value);
  };

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <div>*Only for test</div>
      <input
        type="number"
        onChange={handleOnChange}
        defaultValue={maxPageNumber}
        step={2}
        min={1}
      ></input>
      <Pagination
        currentPageIndex={currentPageIndex}
        test={maxPageNumber}
        totalPageNumber={totalPageNumber}
        onClick={handleOnClick}
      ></Pagination>
      <Pagination
        currentPageIndex={currentPageIndex}
        test={maxPageNumber}
        totalPageNumber={totalPageNumber}
        previousButtonLabel="<"
        nextButtonLabel=">"
        onClick={handleOnClick}
      ></Pagination>
    </div>
  );
};

export default Yuhwan;
