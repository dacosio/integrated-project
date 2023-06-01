import React, { useEffect, useState } from "react";
import "./pagination.css";

const Pagination = ({
  hasPrevious,
  minPageIndex,
  currentPageIndex: _currentPageIndex,
  maxPageIndex,
  hasNext,
  totalPageNumber,
  onClickPage,
  ...props
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(_currentPageIndex);

  const pages = [];
  for (let i = minPageIndex; i <= maxPageIndex; i++) {
    pages.push(i);
  }

  useEffect(() => {
    onClickPage(currentPageIndex);
  }, [currentPageIndex]);

  return (
    <ul className="page-wrapper">
      <li>
        <button
          className="page-btn"
          onClick={() => {
            setCurrentPageIndex(1);
          }}
        >
          &lt;&lt;
        </button>
      </li>
      {hasPrevious && (
        <li>
          <button
            className="page-btn"
            onClick={() => {
              setCurrentPageIndex(minPageIndex - 1);
            }}
          >
            &lt;
          </button>
        </li>
      )}
      {pages.map((item, index) => {
        if (item === currentPageIndex) {
          return (
            <li key={index}>
              <button
                className="page-btn active"
                onClick={() => {
                  setCurrentPageIndex(item);
                }}
              >
                {item}
              </button>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <button
                className="page-btn"
                onClick={() => {
                  setCurrentPageIndex(item);
                }}
              >
                {item}
              </button>
            </li>
          );
        }
      })}
      {hasNext && (
        <li>
          <button
            className="page-btn"
            onClick={() => {
              setCurrentPageIndex(maxPageIndex + 1);
            }}
          >
            &gt;
          </button>
        </li>
      )}
      <li>
        <button
          className="page-btn"
          onClick={() => {
            setCurrentPageIndex(totalPageNumber);
          }}
        >
          &gt;&gt;
        </button>
      </li>
    </ul>
  );
};

export default React.memo(Pagination);
