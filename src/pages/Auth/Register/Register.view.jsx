import { Formik, Form } from "formik";
import FormikControl from "../../../components/base/FormikControl/FormikControl";
import Button from "./../../../components/base/Button/Button";
import style from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Typography from "../../../components/base/Typography/Typography";
import { GoogleSVG, LoginLogoSVG } from "../../../components/base/SVG";
import SingleImageInput from "../../../components/base/SingleImageInput/SingleImageInput";

const RegisterView = (props) => {
  const {
    initialValues,
    validationSchema,
    onSubmit,
    singleImage,
    setSingleImage,
  } = props;
  const navigate = useNavigate();

  const formikStyle = {
    borderRadius: "12px",
    padding: "6px 16px",
    minWidth: "289px",
  };
  return (
    <div className={style.loginWrapper}>
      <LoginLogoSVG />
      {/* <DropShadowLogoSVG /> */}

      <div className={style.formikContainer}>
        <Typography variant="h3-graphik-bold" style={{ alignSelf: "start" }}>
          Create Account
        </Typography>

        <div className={style.imageUpload}>
          <SingleImageInput
            images={singleImage}
            setImages={setSingleImage}
            disableLabel
          />
          <Typography
            color="gray"
            variant="body-2-regular"
            style={{ textAlign: "center" }}
          >
            Upload Photo
          </Typography>
        </div>

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
                  label="Email*"
                  name="email"
                  placeholder="Type your email"
                  style={formikStyle}
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="First Name*"
                  name="firstName"
                  placeholder="Type your first name"
                  style={formikStyle}
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Last Name*"
                  name="lastName"
                  placeholder="Type your last name"
                  style={formikStyle}
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Password*"
                  name="password"
                  placeholder="Type your password"
                  style={formikStyle}
                />
                <FormikControl
                  control="input"
                  type="password"
                  label="Confirm Password*"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  style={formikStyle}
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Contact Number"
                  name="contactNumber"
                  placeholder="Type your number"
                  style={formikStyle}
                />
                <div className={style.buttonWrapper}>
                  <Button
                    variant="white"
                    size="md"
                    label="Back"
                    hoverable
                    onClickHandler={() => navigate(-1)}
                  />
                  <Button
                    variant="yellow"
                    size="md"
                    label="Create Account"
                    hoverable
                    disable={!formik.isValid}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterView;
