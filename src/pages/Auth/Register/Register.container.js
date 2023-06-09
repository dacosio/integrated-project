import React from "react";
import * as Yup from "yup";
import RegisterView from "./Register.view";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    // contactNumber: Yup.string().required("Contact number is required"),
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
  };
  return <RegisterView {...generatedProps} />;
};

export default Register;
