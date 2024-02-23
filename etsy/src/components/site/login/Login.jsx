import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login__common">
      <div className="login">
        <span className="login__title">Login your account</span>
        <div>
          <Formik
            initialValues={{ name: "", surname: "", email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              axios
                .post("http://localhost:8080/human/login", { ...values })
                .then((res) => {
                  toast.success(`${res.data.name} xos geldiniz`);
                  navigate("/");
                })
                .catch((error) => {
                  toast.error("Email or password is incorrect");
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="login__items">
                <span>Email Address</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="emailAddres"
                />
                {errors.email && touched.email && errors.email}
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="passwordLogin"
                />
                {errors.password && touched.password && errors.password}
                <div className="button">
                  <button type="submit" disabled={isSubmitting}>
                    Log in
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        If you can't log in:{" "}
        <Link to="/register" className="register">
          Register
        </Link>
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
