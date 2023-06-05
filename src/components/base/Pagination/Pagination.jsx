import React from "react";
import "./pagination.css";

const Pagination = ({
  hasPrevious,
  minPageIndex,
  currentPageIndex,
  maxPageIndex,
  hasNext,
  totalPageNumber,
  onClick,
  ...props
}) => {
  const pages = [];
  for (let i = minPageIndex; i <= maxPageIndex; i++) {
    pages.push(i);
  }

  return (
    <ul className="page-wrapper">
      <li>
        <button className="page-btn" onClick={() => onClick(1)}>
          &lt;&lt;
        </button>
      </li>
      {hasPrevious && (
        <li>
          <button
            className="page-btn"
            onClick={() => onClick(minPageIndex - 1)}
          >
            &lt;
          </button>
        </li>
      )}
      {pages.map((item, index) => {
        if (item === currentPageIndex) {
          return (
            <li key={index}>
              <button className="page-btn active" onClick={() => onClick(item)}>
                {item}
              </button>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <button className="page-btn" onClick={() => onClick(item)}>
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
            onClick={() => onClick(maxPageIndex + 1)}
          >
            &gt;
          </button>
        </li>
      )}
      <li>
        <button className="page-btn" onClick={() => onClick(totalPageNumber)}>
          &gt;&gt;
        </button>
      </li>
    </ul>
  );
};

export default React.memo(Pagination);
