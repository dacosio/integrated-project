import React from "react";
import LoginView from "./Login.view";
import * as Yup from "yup";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async ({ email, password }) => {
    await signIn(email, password);
    navigate("/");
  };

  const generatedProps = {
    // generated props here
    initialValues,
    validationSchema,
    onSubmit,
  };
  return <LoginView {...generatedProps} />;
};

export default Login;
