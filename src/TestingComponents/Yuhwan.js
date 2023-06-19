import React, { useState } from "react";
import { storage } from "../config/firebaseConfig";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import Page from "../components/base/Page/Page";
import Pagination from "../components/base/Pagination/Pagination";
import SingleImageInput from "../components/base/SingleImageInput/SingleImageInput";
import ImageInput from "../components/base/ImageInput/ImageInput";
import NumberInput from "../components/base/NumberInput/NumberInput";
import DatePicker from "../components/base/DatePicker/DatePicker";
import TimePicker from "../components/base/TimePicker/TimePicker";
import Dropdown from "../components/base/Dropdown/Dropdown";
import ImageList from "../components/base/ImageList/ImageList";
import Button from "../components/base/Button/Button";

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

  const handleOnSingleUpload = () => {
    if (singleImage.length !== 0) {
      for (const image of singleImage) {
        const file = image.file;

        const fileRef = ref(storage, "image/" + file.name);

        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            console.log(progress + "% Done.");
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(fileRef).then((url) => {
              console.log(url);
            });
          }
        );
      }

      setSingleImage([]);
    }
  };

  /* MultipleImageInput */
  const [multipleImages, setMultipleImages] = useState([]);

  /* ImageInput */
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleOnMultipleUpload = () => {
    if (multipleImages.length !== 0) {
      for (const image of multipleImages) {
        const file = image.file;

        const fileRef = ref(storage, "image/" + file.name);

        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            console.log(progress + "% Done.");
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(fileRef).then((url) => {
              console.log(url);
            });
          }
        );
      }

      setMultipleImages([]);
    }
  };

  const handleOnRefresh = () => {
    const directoryRef = ref(storage, "image");

    listAll(directoryRef)
      .then(async (res) => {
        const files = [];

        const promises = res.items.map(async (fileRef, index) => {
          await getDownloadURL(fileRef).then((url) => {
            files.push(url);
          });
        });

        await Promise.all(promises);

        setUploadedImages([...files.sort()]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    "https://picsum.photos/id/10/900/600",
    "https://picsum.photos/id/20/900/600",
    "https://picsum.photos/id/30/900/600",
    "https://picsum.photos/id/40/900/600",
    "https://picsum.photos/id/50/900/600",
    "https://picsum.photos/id/60/900/600",
    "https://picsum.photos/id/70/900/600",
    "https://picsum.photos/id/80/900/600",
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
        <div style={{ width: "100%", maxWidth: "300px", margin: "auto" }}>
          <SingleImageInput images={singleImage} setImages={setSingleImage} />
          <Button
            size="lg"
            label="Upload Test!!!!!"
            onClickHandler={handleOnSingleUpload}
            hoverable
          />
        </div>
      </div>
      <div>
        <h2>ImageInput</h2>
        <div style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
          <ImageInput images={multipleImages} setImages={setMultipleImages} />
          <Button
            size="lg"
            label="Upload Test!!!!!"
            onClickHandler={handleOnMultipleUpload}
            hoverable
          />
          <Button
            size="lg"
            label="Refresh!!!!!"
            onClickHandler={handleOnRefresh}
            hoverable
          />
          <ImageList images={uploadedImages} />
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
        <div style={{ minWidth: "300px", width: "50%", margin: "auto" }}>
          <ImageList images={images} />
          <br />
          <br />
          <br />
          <ImageList images={images} mode="vertical" />
        </div>
      </div>
      <div>
        <h2>Button</h2>
        <div>
          <Button variant="black" size="sm" label="Button" hoverable />
          <Button variant="dark-blue" size="sm" label="Button" hoverable />
          <Button variant="light-blue" size="sm" label="Button" hoverable />
          <Button variant="yellow" size="sm" label="Button" hoverable />
          <Button variant="white" size="sm" label="Button" hoverable />

          <Button variant="black" size="sm" label="Button" disabled />
        </div>
        <div>
          <Button variant="black" size="md" label="Button" hoverable />
          <Button variant="dark-blue" size="md" label="Button" hoverable />
          <Button variant="light-blue" size="md" label="Button" hoverable />
          <Button variant="yellow" size="md" label="Button" hoverable />
          <Button variant="white" size="md" label="Button" hoverable />

          <Button variant="black" size="md" label="Button" disabled />
        </div>

        <div>
          <Button variant="black" size="lg" label="Button" hoverable />
          <Button variant="dark-blue" size="lg" label="Button" hoverable />
          <Button variant="light-blue" size="lg" label="Button" hoverable />
          <Button variant="yellow" size="lg" label="Button" hoverable />
          <Button variant="white" size="lg" label="Button" hoverable />

          <Button variant="black" size="lg" label="Button" disabled />
        </div>
        <div>
          <Button variant="black" size="lg" label="Button" />
          <Button variant="dark-blue" size="lg" label="Button" />
          <Button variant="light-blue" size="lg" label="Button" />
          <Button variant="yellow" size="lg" label="Button" />
          <Button variant="white" size="lg" label="Button" />
        </div>
      </div>
      <div style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default Yuhwan;
