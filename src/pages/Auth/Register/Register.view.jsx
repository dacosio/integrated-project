import { Formik, Form } from "formik";
import FormikControl from "../../../components/base/FormikControl/FormikControl";
import React from "react";

const Register = (props) => {
  const { initialValues, validationSchema, onSubmit } = props;

  return (
    <div>
      <h1>Create Account</h1>
      <div>
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
                <FormikControl
                  control="input"
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                />
                {/* <FormikControl
                  control="input"
                  type="text"
                  label="Contact Number"
                  name="contactNumber"
                /> */}
                <button type="submit" disabled={!formik.isValid}>
                  Create Account
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
