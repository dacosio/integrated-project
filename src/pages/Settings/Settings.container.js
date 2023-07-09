/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import SettingsView from "./Settings.view";
import * as Yup from "yup";
import { updatePassword } from 'firebase/auth';
import { auth } from "./../../config/firebaseConfig";
import { toast } from "react-toastify";


const Settings = () => {
  const [profileVisibility, setProfileVisibility] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [aboutUsVisibility, setAboutUsVisibility] = useState(false);
  const [singleImage, setSingleImage] = useState([]);

  const changePasswordValues = {
    password: "",
    newPassword: "",
  };

  const changePersonalInfoValues = {
    contactNumber: "",
    address: "",
  }

  const validatePasswordSchema = Yup.object({
    password: Yup.string().required("Your password is required"),
    newPassword: Yup.string().required("Your new password is required"),
    confirmNewPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Your new password does not match"
    ),
  });

  const onSubmitNewPassword = async ({ newPassword }) => {
    const user = auth.currentUser;

    updatePassword(user, newPassword)
      .then(() => {
        console.log('Password changed successfully.');
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
        console.log('Error changing password:', error);
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
    changePersonalInfoValues,
  };
  return <SettingsView {...generatedProps} />;
};

export default Settings;
