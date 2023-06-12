import { Formik, Form } from "formik";
import FormikControl from "../../../components/base/FormikControl/FormikControl";
import Button from "./../../../components/base/Button/Button"
import "./Login.css"
import { BsFacebook } from "react-icons/bs"
import { BsGoogle } from "react-icons/bs"

const LoginView = (props) => {
  const { initialValues, validationSchema, onSubmit } = props;

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
      
      <Button><BsGoogle />Log in with Google</Button>
      <Button><BsFacebook />Log in with Facebook</Button>
            <a href="#">No account yet? Create one.</a>
    </div>
  );
};

export default LoginView;
