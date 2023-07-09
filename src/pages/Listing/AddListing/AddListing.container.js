import React, { useState } from "react";
import AddListingView from "./AddListing.view";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import db from "../../../config/firebaseConfig";
import {
  addDoc,
  serverTimestamp,
  collection,
  doc,
  setDoc,
} from "@firebase/firestore";
import { useEffect } from "react";

const AddListing = () => {
  const [meetupDate, setMeetupDate] = useState();
  const [meetupTime, setMeetupTime] = useState("");
  const [divisionNumber, setDivisionNumber] = useState(1);
  const [portionNumber, setPortionNumber] = useState(1);
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [portionPrice, setPortionPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {}, []);

  const navigate = useNavigate();

  const initialValues = {
    itemName: "",
    description: "",
    originalPrice: "",
  };

  const validationSchema = Yup.object({
    itemName: Yup.string().required("Your item name is required"),
    description: Yup.string().required("Your item description is required"),
    originalPrice: Yup.number().required("Your item price is required"),
  });

  const onSubmit = ({ itemName, description, originalPrice }) => {
    console.log(itemName, description, originalPrice, category);
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
    onSubmit,
    navigate,
  };
  return <AddListingView {...generatedProps} />;
};

export default AddListing;
