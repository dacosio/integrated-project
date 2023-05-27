import React from "react";
import { useState } from "react";
import { PageButton } from "./PageButton";

export const Pagination = ({ results, resultNumber, pageNumber }) => {
  const [currentPage, setCurrentPage] = useState(1);
  resultNumber = Number(resultNumber);
  pageNumber = Number(pageNumber);

  const totalPageNumber = Math.ceil(results.length / resultNumber);
  const currentGroupIndex = Math.ceil(currentPage / pageNumber);
  const hasPreviousGroup = 1 < currentGroupIndex;
  const hasNextGroup =
    currentGroupIndex * pageNumber * resultNumber < results.length;
  const startPageIndex = (currentGroupIndex - 1) * pageNumber + 1;
  const endPageIndex = hasNextGroup
    ? currentGroupIndex * pageNumber
    : totalPageNumber;

  const pages = [];
  for (let i = startPageIndex; i <= endPageIndex; i++) {
    pages.push(i);
  }

  //  I tried to use useState but it gives me
  //  "react-dom.development.js:16317 Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop."
  //  message.
  const currentResult = results.slice(
    (currentPage - 1) * resultNumber,
    (currentPage - 1) * resultNumber + resultNumber
  );

  return (
    <div>
      {/* Should I put a ul tag in the Pagination component? It is weird for me but I put that for the test. */}
      <ul className="list-group">
        {currentResult.map((result) => (
          <li className="list-group-item" key={result.id}>
            {result.value}
          </li>
        ))}
      </ul>
      <ul className="pagination">
        <PageButton
          liClassName="page-item"
          buttonClassName="page-link"
          onClick={() => setCurrentPage(1)}
          label="<<"
          key={0}
        ></PageButton>
        {hasPreviousGroup && (
          <PageButton
            liClassName="page-item"
            buttonClassName="page-link"
            onClick={() => setCurrentPage(startPageIndex - 1)}
            label="<"
            key={startPageIndex - 1}
          ></PageButton>
        )}
        {pages.map((page) =>
          page === currentPage ? (
            <PageButton
              liClassName="page-item active"
              buttonClassName="page-link"
              onClick={() => setCurrentPage(page)}
              label={page}
              key={page}
            ></PageButton>
          ) : (
            <PageButton
              liClassName="page-item"
              buttonClassName="page-link"
              onClick={() => setCurrentPage(page)}
              label={page}
              key={page}
            ></PageButton>
          )
        )}
        {hasNextGroup && (
          <PageButton
            liClassName="page-item"
            buttonClassName="page-link"
            onClick={() => setCurrentPage(endPageIndex + 1)}
            label=">"
            key={endPageIndex + 1}
          ></PageButton>
        )}
        <PageButton
          liClassName="page-item"
          buttonClassName="page-link"
          onClick={() => setCurrentPage(totalPageNumber)}
          label=">>"
          key={-1}
        ></PageButton>
      </ul>
    </div>
  );
};
