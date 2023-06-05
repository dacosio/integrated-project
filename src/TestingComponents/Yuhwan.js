import React, { useState } from "react";
import Pagination from "../components/base/Pagination/Pagination";

const Yuhwan = (props) => {
  const [hasPrevious, setHasPrevious] = useState(true);
  const [minPageIndex, setMinPageIndex] = useState(10);
  const [currentPageIndex, setCurrentPageIndex] = useState(15);
  const [maxPageIndex, setMaxPageIndex] = useState(20);
  const [hasNext, setHasNext] = useState(true);
  const [totalPageNumber, setTotalPageNumber] = useState(30);

  const handleOnClick = (pageIndex) => {
    setCurrentPageIndex(pageIndex);
  };

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <Pagination
        hasPrevious={hasPrevious}
        minPageIndex={minPageIndex}
        currentPageIndex={currentPageIndex}
        maxPageIndex={maxPageIndex}
        hasNext={hasNext}
        totalPageNumber={totalPageNumber}
        onClick={handleOnClick}
      ></Pagination>
    </div>
  );
};

export default Yuhwan;
