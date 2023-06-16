import React, { useState } from "react";
import Page from "../components/base/Page/Page";
import Pagination from "../components/base/Pagination/Pagination";
import SingleImageInput from "../components/base/SingleImageInput/SingleImageInput";
import ImageInput from "../components/base/ImageInput/ImageInput";
import NumberInput from "../components/base/NumberInput/NumberInput";
import DatePicker from "../components/base/DatePicker/DatePicker";
import TimePicker from "../components/base/TimePicker/TimePicker";
import Dropdown from "../components/base/Dropdown/Dropdown";
import ImageList from "../components/base/ImageList/ImageList";

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

  /* MultipleImageInput */
  const [multipleImages, setMultipleImages] = useState([]);

  /* NumberInput */
  const [number, setNumber] = useState(0);

  /* DatePicker */
  const [date, setDate] = useState();

  /* TimePicker */
  const [time, setTime] = useState("");

  /* Dropdown */
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { value: "value1", label: "label1" },
    { value: "value2", label: "label2" },
    { value: "value3", label: "label3" },
  ];

  /* ImageList */
  const images = [
    "https://picsum.photos/id/10/200/300",
    "https://picsum.photos/id/20/200/300",
    "https://picsum.photos/id/30/200/300",
    "https://picsum.photos/id/40/200/300",
    "https://picsum.photos/id/50/200/300",
  ];

  return (
    <div>
      <h1>Yuhwan</h1>
      <div>Test here</div>
      <div>
        <h2>Page</h2>
        <h2>Pagination</h2>
        <Pagination
          currentPageIndex={currentPageIndex}
          pageNumber={pageNumber}
          totalPageNumber={totalPageNumber}
          onClick={handleOnClick}
        />
        <Page items={items} columns={columns} />
      </div>
      <div>
        <h2>SingleImageInput</h2>
        <div style={{ width: "10%", margin: "auto" }}>
          <SingleImageInput images={singleImage} setImages={setSingleImage} />
        </div>
      </div>
      <div>
        <h2>ImageInput</h2>
        <div style={{ width: "30%", margin: "auto" }}>
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
      <div>
        <h2>Dropdown</h2>
        <Dropdown
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          options={options}
          label="Select"
        />
      </div>
      <div>
        <h2>ImageList</h2>
        <div style={{ width: "30%", margin: "auto" }}>
          <ImageList images={images} />
        </div>
        <div style={{ width: "30%", margin: "auto" }}>
          <ImageList images={images} mode="vertical" />
        </div>
      </div>
      <div style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default Yuhwan;
