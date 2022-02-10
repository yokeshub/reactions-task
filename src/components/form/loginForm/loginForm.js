import React from "react";
import styles from "./loginForm.module.css";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loginSuccess } from "../../../redux/auth/auth.actions";
import { useHistory } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.userid) {
    errors.userid = "User-id Required";
  }
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password !== "1234") {
    errors.password = "Wrong password!!";
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <label className={styles.form_input_wrap}>
    <span className={styles.form_input_label}>{label}</span>
    <input
      className={styles.form_input_field}
      {...input}
      type={type}
      autoComplete="off"
    />
    <span className={styles.form_input_error}>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </span>
  </label>
);

const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  function onLoginhandler(values) {
    if (
      values.userid !== undefined &&
      values.password !== undefined &&
      values.userid !== "" &&
      values.password !== "" &&
      values.password === "1234"
    ) {
      dispatch(loginSuccess(parseInt(values.userid)));
      history.push("chatbox");
    }
  }
  return (
    <div className={styles.loginform_container}>
      <div className={styles.loginform_wrapper}>
        <form
          className={styles.loginform_form}
          onSubmit={handleSubmit(onLoginhandler)}
        >
          <Field
            name="userid"
            type="text"
            component={renderField}
            label="Enter your Id"
          />
          <Field
            name="password"
            type="password"
            component={renderField}
            label="Enter your password"
          />
          <div>
            <button
              type="submit"
              className={styles.loginBtn}
              disabled={submitting}
            >
              Submit
            </button>
          </div>
          <div>
            <p>
              Please Login with user-id: <strong>1 - 30</strong> and password: <strong>1234</strong>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: "loginForm", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
})(SyncValidationForm);
