import React from "react";
import LoginView from "./Login.view";
import * as Yup from "yup";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  browserPopupRedirectResolver,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../config/firebaseConfig";
import { toast } from "react-toastify";
import useMediaQuery from "../../../utils/useMediaQuery";

const Login = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Your email is required"),
    password: Yup.string().required("Your password is required"),
  });

  const onSubmit = async ({ email, password }) => {
    await signIn(email, password);
    navigate("/");
  };

  const loginWithGoogle = async () => {
    const provider = await new GoogleAuthProvider();

    return signInWithPopup(auth, provider, browserPopupRedirectResolver)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(`${errorMessage}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const lg = useMediaQuery("(min-width: 1200px)");
  const xl = useMediaQuery("(min-width: 1400px)");

  const generatedProps = {
    // generated props here
    initialValues,
    validationSchema,
    loginWithGoogle,
    onSubmit,

    lg,
    xl,
  };
  return <LoginView {...generatedProps} />;
};

export default Login;
