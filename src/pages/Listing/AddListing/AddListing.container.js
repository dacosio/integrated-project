import React, { useState } from "react";
import AddListingView from "./AddListing.view";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import db, { storage } from "../../../config/firebaseConfig";
import { addDoc, serverTimestamp, collection, doc } from "@firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "@firebase/storage";
import { useEffect } from "react";

const AddListing = () => {
  const [meetupDate, setMeetupDate] = useState();
  const [meetupTime, setMeetupTime] = useState("");
  const [divisionNumber, setDivisionNumber] = useState(1);
  const [portionNumber, setPortionNumber] = useState(1);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [portionPrice, setPortionPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  const initialValues = {
    itemName: "",
    description: "",
    originalPrice: "",
  };

  const validationSchema = Yup.object({
    itemName: Yup.string().required("Your item name is required."),
    description: Yup.string().required("Your item description is required."),
    originalPrice: Yup.number()
      .required("Your item price is required.")
      .typeError("Your item price should be a number."),
  });

  useEffect(() => {
    setPortionPrice((originalPrice / divisionNumber).toFixed(2));
    setTotalPrice((originalPrice / divisionNumber).toFixed(2) * portionNumber);
  }, [originalPrice, divisionNumber, portionNumber]);

  const handleOnSubmit = ({ itemName, description, originalPrice }) => {
    // console.log(itemName, description, originalPrice, category);

    // for (const image of images) {
    //   const file = image.file;
    //   const fileRef = ref(storage, "test-product-image/" + file.name);

    // uploadBytes(fileRef, file).then((snapshot) => {
    //   console.log(snapshot);
    // getDownloadURL(fileRef).then((url) => {
    //   console.log(url);
    // });
    // });
    // }

    addDoc(collection(db, "product"), {
      categoryLabel: category,
      categoryValue: category,
      createdAt: serverTimestamp(),
      createdByFirstName: "First",
      createdById: doc(db, "user", "LPGuEmp6UdcHRn27OWvd"),
      createdByLastName: "Last",
      createdBydisplayName: "LPGuEmp6UdcHRn27OWvd",
      description: description,
      name: itemName,
      price: originalPrice,
    }).then((response) => {
      console.log(response.id);
    });
  };

  const handleOnBlur = (event, formik) => {
    setOriginalPrice(event.target.value);
    formik.handleBlur(event);
  };

  const generatedProps = {
    images,
    setImages,
    meetupDate,
    setMeetupDate,
    meetupTime,
    setMeetupTime,
    divisionNumber,
    setDivisionNumber,
    portionNumber,
    setPortionNumber,
    category,
    setCategory,
    portionPrice,
    totalPrice,
    initialValues,
    validationSchema,
    handleOnSubmit,
    handleOnBlur,
    navigate,
  };
  return <AddListingView {...generatedProps} />;
};

export default AddListing;
