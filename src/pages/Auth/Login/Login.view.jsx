import { Formik, Form } from "formik";
import FormikControl from "../../../components/base/FormikControl/FormikControl";

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
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
      <Button />
      <Button />
      <Button />
      <a>No account yet? Create one.</a>
    </div>
  );
};

export default LoginView;
