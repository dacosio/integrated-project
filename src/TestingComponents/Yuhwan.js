import React, { useState } from "react";
import Page from "../components/base/Page/Page";
import Pagination from "../components/base/Pagination/Pagination";
import SingleImageInput from "../components/base/SingleImageInput/SingleImageInput";
import ImageInput from "../components/base/ImageInput/ImageInput";
import NumberInput from "../components/base/NumberInput/NumberInput";
import DatePicker from "../components/base/DatePicker/DatePicker";
import TimePicker from "../components/base/TimePicker/TimePicker";

const Yuhwan = (props) => {
  /* Pagination */
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

  /* SingleImageInput */
  const [singleImage, setSingleImage] = useState([]);

  const singleImageInputStyles = {
    width: "10%",
    margin: "auto",
  };

  /* MultipleImageInput */
  const [multipleImages, setMultipleImages] = useState([]);

  const multipleImageInputStyles = {
    width: "30%",
    margin: "auto",
  };

  /* NumberInput */
  const [number, setNumber] = useState(0);

  /* DatePicker */
  const [date, setDate] = useState("");

  /* TimePicker */
  const [time, setTime] = useState("");

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
      <div>
        <h2>SingleImageInput</h2>
        <div style={singleImageInputStyles}>
          <SingleImageInput images={singleImage} setImages={setSingleImage} />
        </div>
      </div>
      <div>
        <h2>ImageInput</h2>
        <div style={multipleImageInputStyles}>
          <ImageInput images={multipleImages} setImages={setMultipleImages} />
        </div>
      </div>
      <div>
        <h2>NumberInput</h2>
        <NumberInput
          inputNumber={number}
          setInputNumber={setNumber}
          maxValue={10}
        />
      </div>
      <div>
        <h2>DatePicker</h2>
        <DatePicker date={date} setDate={setDate} />
      </div>
      <div>
        <h2>TimePicker</h2>
        <TimePicker time={time} setTime={setTime} />
      </div>
    </div>
  );
};

export default Yuhwan;
