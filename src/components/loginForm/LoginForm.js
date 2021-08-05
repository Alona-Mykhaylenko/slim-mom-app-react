import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/auth.operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import schema from "./validator/Validator";
import style from "./LoginForm.module.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import svg from "../../img/svg/eye-login.svg";

const InitialState = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [showPassword, showSetPassword] = useState(false);
  const toggleShowPassword = () => showSetPassword((prevState) => !prevState);

  return (
    <div className={style.container}>
      <div className={style.formContainer}>
        <h1 className={style.authTitle}>SIGN IN</h1>
        <Formik
          initialValues={InitialState}
          validationSchema={schema}
          onSubmit={(values) => {
            dispatch(logIn(values));
          }}
        >
          <Form className={style.form}>
            <label>
              <Field
                type="email"
                name="email"
                placeholder="Sign in *"
                className={style.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={style.errorMessage}
              />
            </label>

            <label>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password *"
                className={style.input}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className={style.eyeIconBtn}
              >
                {showPassword ? (
                  <svg className={style.eyeIcon}>
                    <use href={`${svg}#icon-eye`}></use>
                  </svg>
                ) : (
                  <svg className={style.eyeIcon}>
                    <use href={`${svg}#icon-eye-hidden`}></use>
                  </svg>
                )}
              </button>
              <ErrorMessage
                name="password"
                component="div"
                className={style.errorMessage}
              />
            </label>

            <div className={style.buttonContainer}>
              <button className={style.authButton} type="submit">
                {location.pathname === "/registration"
                  ? "Registration"
                  : "Sign in"}
              </button>

              {location.pathname === "/registration" ? (
                <Link to="/login" className={style.authLink}>
                  {location.pathname === "/registration"
                    ? "Sign in"
                    : "Registration"}
                </Link>
              ) : (
                <Link to="/registration" className={style.authLink}>
                  {location.pathname === "/registration"
                    ? "Sign in"
                    : "Registration"}
                </Link>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
