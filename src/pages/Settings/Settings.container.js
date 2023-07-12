/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import SettingsView from "./Settings.view";
import * as Yup from "yup";
import { updatePassword } from "firebase/auth";
import { auth, storage } from "./../../config/firebaseConfig";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { Place } from "../../context/PlaceContext";
import {
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "@firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";
import db from "../../config/firebaseConfig";

const Settings = () => {
  const [profileVisibility, setProfileVisibility] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [aboutUsVisibility, setAboutUsVisibility] = useState(false);
  const [singleImage, setSingleImage] = useState([]);
  const { placeValue, updatePlaceValue } = Place();

  useEffect(() => {
    updatePlaceValue("");
  }, []);

  const changePasswordValues = {
    password: "",
    newPassword: "",
  };

  const changeContactValues = {
    contactNumber: "",
  };

  const user = auth.currentUser;
  console.log(user);

  const validatePasswordSchema = Yup.object({
    password: Yup.string().required("Your password is required"),
    newPassword: Yup.string().required("Your new password is required"),
    confirmNewPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Your new password does not match"
    ),
  });

  const onSubmitUpdateInfo = async ({ contactNumber }) => {
    console.log(contactNumber);
    if (singleImage.length !== 0) {
      for (const image of singleImage) {
        const file = image.file;
        const uniqueId = uuidv4();
        const fileRef = ref(
          storage,
          `profile-image/${file.name.split(".")[0]}-${uniqueId}`
        );
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
          async () => {
            await getDownloadURL(fileRef).then(async (imageUrl) => {
              console.log(
                "here1",
                contactNumber ? contactNumber : user.phoneNumber
              );
              console.log("here2", imageUrl ? imageUrl : user.photoURL);
              const userDocRef = doc(db, "user", user.uid);
              updateDoc(userDocRef, {
                imageUrl: imageUrl,
                contactNumber: contactNumber,
                address: placeValue.formatted_address
                  ? placeValue.formatted_address
                  : "",
                updatedAt: serverTimestamp(),
              })
              .then(() => {
                console.log("Information has been successfully updated.");
                toast.success("Information has been successfully updated.", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  newestOnTop: false,
                  theme: "light",
                });
              })
              .catch((error) => {
                console.log("Error updating your information", error);
                toast.error("Error updating your information", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  newestOnTop: false,
                  theme: "light",
                });
              });

            });
          }
        );
        setSingleImage([]);
      }
    }
  };



  const onSubmitNewPassword = async ({ newPassword }) => {
    updatePassword(user, newPassword)
      .then(() => {
        console.log("Password changed successfully.");
        toast.success("Password has been changed successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          newestOnTop: false,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log("Error changing password", error);
        toast.error("Error changing password", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          newestOnTop: false,
          theme: "light",
        });
      });
  };

  const generatedProps = {
    profileVisibility,
    setProfileVisibility,
    passwordVisibility,
    setPasswordVisibility,
    aboutUsVisibility,
    setAboutUsVisibility,
    singleImage,
    setSingleImage,
    changePasswordValues,
    validatePasswordSchema,
    onSubmitNewPassword,
    changeContactValues,
    // validateContactSchema,
    onSubmitUpdateInfo,
    // singleImage,
    // setSingleImage,
  };
  return <SettingsView {...generatedProps} />;
};

export default Settings;
