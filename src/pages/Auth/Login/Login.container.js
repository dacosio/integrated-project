import React from "react";
import LoginView from "./Login.view";
import * as Yup from "yup";

const Login = () => {
  const login = () => {
    console.log("Login");
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const generatedProps = {
    // generated props here
    login,
    initialValues,
    validationSchema,
    onSubmit,
  };
  return <LoginView {...generatedProps} />;
};

export default Login;
