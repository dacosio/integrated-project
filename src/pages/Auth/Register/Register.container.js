import React, { useState } from "react";
import * as Yup from "yup";
import RegisterView from "./Register.view";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const [singleImage, setSingleImage] = useState([]);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string().required("Your password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Your password does not match"
    ),
    firstName: Yup.string().required("Your First Name is required"),
    lastName: Yup.string().required("Your Last Name is required"),
    contactNumber: Yup.string().required("Your contact is required"),
  });

  const onSubmit = async ({ email, password }) => {
    await createUser(email, password);
    navigate("/");
  };

  const generatedProps = {
    // generated props here
    initialValues,
    validationSchema,
    onSubmit,

    singleImage,
    setSingleImage,
  };
  return <RegisterView {...generatedProps} />;
};

export default Register;
