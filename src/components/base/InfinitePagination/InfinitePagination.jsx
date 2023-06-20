import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BeatLoader from "react-spinners/BeatLoader";
import styles from "./infinite-pagination.module.css";

const InfinitePagination = ({ items, onScroll, hasMore, ...props }) => {
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={onScroll}
      hasMore={hasMore}
      loader={
        <div style={{ textAlign: "center" }}>
          <BeatLoader color="#1c2aae" />
        </div>
      }
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
