import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./infinite-pagination.module.css";

const InfinitePagination = ({ items, onScroll, hasMore, ...props }) => {
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={onScroll}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>No more items.</b>
        </p>
      }
    >
      {items}
    </InfiniteScroll>
  );
};

export default React.memo(InfinitePagination);
