import { Formik, Form } from "formik";
import FormikControl from "../../../components/base/FormikControl/FormikControl";
import Button from "./../../../components/base/Button/Button";
import "./Login.css";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const LoginView = (props) => {
  const { initialValues, validationSchema, loginWithGoogle, onSubmit } = props;

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              <button type="submit" disabled={!formik.isValid}>
                Log In
              </button>
            </Form>
          );
        }}
      </Formik>
      <Button onClickHandler={loginWithGoogle} label="Log in with Google" />
      <div>
        No account yet? <Link to="/register">Create one.</Link>
      </div>
      <div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default LoginView;
