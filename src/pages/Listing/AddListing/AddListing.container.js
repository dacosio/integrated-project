import React, { useState } from "react";
import AddListingView from "./AddListing.view";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import db, { storage } from "../../../config/firebaseConfig";
import {
  addDoc,
  getDocs,
  serverTimestamp,
  collection,
  doc,
  GeoPoint,
} from "@firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "@firebase/storage";
import { useEffect } from "react";
import { Place } from "../../../context/PlaceContext";
import { UserAuth } from "../../../context/AuthContext";

const AddListing = () => {
  const { user } = UserAuth();
  const { placeValue } = Place();
  const [meetupDate, setMeetupDate] = useState();
  const [meetupTime, setMeetupTime] = useState("");
  const [divisionNumber, setDivisionNumber] = useState(1);
  const [portionNumber, setPortionNumber] = useState(1);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();
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
    getDocs(collection(db, "category")).then((categoriesResponse) => {
      setCategories(
        categoriesResponse.docs.map((doc) => {
          return { value: doc.data().value, label: doc.data().label };
        })
      );
    });
  }, []);

  useEffect(() => {
    setPortionPrice((originalPrice / divisionNumber).toFixed(2));
    setTotalPrice((originalPrice / divisionNumber).toFixed(2) * portionNumber);
  }, [originalPrice, divisionNumber, portionNumber]);

  const handleOnSubmit = async ({ itemName, description, originalPrice }) => {
    if (
      images.length !== 0 &&
      placeValue &&
      category &&
      meetupDate &&
      meetupTime
    ) {
      const _images = [];
      const promises = images.map(async (image, index) => {
        const file = image.file;
        const fileRef = ref(storage, "test-product-image/" + file.name);
        return uploadBytes(fileRef, file).then(async (uploadResponse) => {
          return getDownloadURL(uploadResponse.ref).then((url) => {
            _images.push({ index: index, url: url });
          });
        });
      });

      Promise.all(promises).then((response) => {
        _images.sort((previous, next) => previous.index - next.index);
        const __images = _images.map((image) => image.url);
        // console.log(__images);
        // console.log(user);
        // console.log(placeValue);
        const [year, month, day] = meetupDate.split("-");
        const [hours, minutes] = meetupTime.split(":");

        addDoc(collection(db, "product"), {
          categoryLabel: category.label,
          categoryValue: category.value,
          createdAt: serverTimestamp(),
          createdByFirstName: "First",
          createdById: doc(db, "user", user.uid),
          createdByIdent: user.uid,
          createdByLastName: "Last",
          createdByDisplayName: user.displayName,
          images: __images,
          latitude: placeValue.geometry.location.lat(),
          location: new GeoPoint(
            placeValue.geometry.location.lat(),
            placeValue.geometry.location.lng()
          ),
          longitude: placeValue.geometry.location.lng(),
          meetUpAddress: placeValue.formatted_address,
          meetUpInfo: new Date(year, month - 1, day, hours, minutes),
          description: description,
          name: itemName,
          price: originalPrice,
          qty: portionNumber,
        }).then((response) => {
          console.log(response.id);

          navigate(`/listing/${response.id}`);
        });
      });
    }
  };

  const handleOnBlur = (event, formik) => {
    setOriginalPrice(event.target.value);
    formik.handleBlur(event);
  };

  const generatedProps = {
    placeValue,
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
    categories,
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
