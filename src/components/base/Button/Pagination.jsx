import React, { useEffect } from "react";
import { useState } from "react";
import { PageButton } from "./PageButton";

export const Pagination = ({
  resultNumber,
  resultNumberPerPage,
  pageNumberPerGroup,
  sendRownum,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  resultNumberPerPage = Number(resultNumberPerPage);
  pageNumberPerGroup = Number(pageNumberPerGroup);

  const totalPageNumber = Math.ceil(resultNumber / resultNumberPerPage);
  const currentGroupIndex = Math.ceil(currentPageIndex / pageNumberPerGroup);
  const hasPreviousGroup = 1 < currentGroupIndex;
  const hasNextGroup =
    currentGroupIndex * pageNumberPerGroup * resultNumberPerPage < resultNumber;
  const startPageIndex = (currentGroupIndex - 1) * pageNumberPerGroup + 1;
  const endPageIndex = hasNextGroup
    ? currentGroupIndex * pageNumberPerGroup
    : totalPageNumber;

  if (totalPageNumber && totalPageNumber < currentPageIndex) {
    setCurrentPageIndex(totalPageNumber);
  }

  const pages = [];
  for (let i = startPageIndex; i <= endPageIndex; i++) {
    pages.push(i);
  }

  let currentRownum = (currentPageIndex - 1) * resultNumberPerPage;

  useEffect(() => {
    sendRownum(currentRownum);
  }, [currentRownum, sendRownum]);

  return (
    <div>
      <ul className="pagination">
        <PageButton
          liClassName="page-item"
          buttonClassName="page-link"
          onClick={() => {
            setCurrentPageIndex(1);
          }}
          label="<<"
          key={0}
        ></PageButton>
        {hasPreviousGroup && (
          <PageButton
            liClassName="page-item"
            buttonClassName="page-link"
            onClick={() => {
              setCurrentPageIndex(startPageIndex - 1);
            }}
            label="<"
            key={startPageIndex - 1}
          ></PageButton>
        )}
        {pages.map((page) =>
          page === currentPageIndex ? (
            <PageButton
              liClassName="page-item active"
              buttonClassName="page-link"
              onClick={() => {
                setCurrentPageIndex(page);
              }}
              label={page}
              key={page}
            ></PageButton>
          ) : (
            <PageButton
              liClassName="page-item"
              buttonClassName="page-link"
              onClick={() => {
                setCurrentPageIndex(page);
              }}
              label={page}
              key={page}
            ></PageButton>
          )
        )}
        {hasNextGroup && (
          <PageButton
            liClassName="page-item"
            buttonClassName="page-link"
            onClick={() => {
              setCurrentPageIndex(endPageIndex + 1);
            }}
            label=">"
            key={endPageIndex + 1}
          ></PageButton>
        )}
        <PageButton
          liClassName="page-item"
          buttonClassName="page-link"
          onClick={() => {
            setCurrentPageIndex(totalPageNumber ? totalPageNumber : 1);
          }}
          label=">>"
          key={-1}
        ></PageButton>
      </ul>
    </div>
  );
};
