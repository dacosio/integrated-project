import React from "react";
import AddListingView from "./AddListing.view";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import db from "../../../config/firebaseConfig";
import { collection, doc, setDoc } from "@firebase/firestore";

const AddListing = () => {
  const navigate = useNavigate();

  const initialValues = {
    itemName: "",
    description: "",
    originalItemPrice: "",
  };

  const validationSchema = Yup.object({
    itemName: Yup.string().required("Your item name is required"),
    description: Yup.string().required("Your item description is required"),
    originalItemPrice: Yup.number().required("Your item price is required"),
  });

  const onSubmit = () => {};

  const generatedProps = {
    initialValues,
    validationSchema,
    onSubmit,
    navigate,
  };
  return <AddListingView {...generatedProps} />;
};

export default AddListing;
