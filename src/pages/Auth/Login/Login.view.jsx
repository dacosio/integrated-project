import { Formik, Form } from "formik";
import FormikControl from "../../../components/base/FormikControl/FormikControl";
import Button from "./../../../components/base/Button/Button";
import style from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Typography from "../../../components/base/Typography/Typography";
import { GoogleSVG, LoginLogoSVG } from "../../../components/base/SVG";
import DropShadowLogoSVG from "../../../components/base/SVG/DropShadowLogoSVG";

const LoginView = (props) => {
  const { initialValues, validationSchema, loginWithGoogle, onSubmit } = props;
  const navigate = useNavigate();
  return (
    <div className={style.loginWrapper}>
      <LoginLogoSVG />
      {/* <DropShadowLogoSVG /> */}
      <div className={style.formikContainer}>
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
                  placeholder="Type your email"
                  style={{
                    borderRadius: "12px",
                    padding: "6px 16px",
                    minWidth: "289px",
                  }}
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Type your password"
                  style={{
                    borderRadius: "12px",
                    padding: "6px 16px",
                    minWidth: "289px",
                  }}
                />
                <div className={style.buttonWrapper}>
                  <Button
                    variant="white"
                    size="md"
                    label="Back"
                    hoverable
                    onClickHandler={() => navigate("/")}
                  />
                  <Button
                    variant="yellow"
                    size="md"
                    label="Log In"
                    hoverable
                    disable={!formik.isValid}
                    type="submit"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className={style.bottom}>
        <Typography variant="h4-graphik-bold" color="white">
          Or log in with
        </Typography>
        <div
          className={style.svg}
          onClick={loginWithGoogle}
          style={{ cursor: "pointer" }}
        >
          <GoogleSVG />
        </div>
        <div className={style.createAcct}>
          <Typography variant="body-2-regular" color="white">
            Don't have an account?
          </Typography>
          <Link to="/register">
            <Typography
              variant="body-2-regular"
              color="white"
              style={{ textDecoration: "underline", fontWeight: "bold" }}
            >
              Create one!
            </Typography>
          </Link>
        </div>
        <div>
          <ToastContainer position="top-center" />
        </div>
      </div>
    </div>
  );
};

export default LoginView;
