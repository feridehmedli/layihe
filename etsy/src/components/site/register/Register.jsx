import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import './Register.scss'

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="login__common">
        <div className="login">
      <div>
        <span className="login__title">Register</span>
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
              .post("http://localhost:8080/human/register", { ...values })
              .then((res) => {
                console.log(res.data);
                toast.success("Qeydiyattan kecdiniz");
                navigate("/");
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
              />
              <span>Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <span>Password</span>
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <div className="button">
              <button type="submit" disabled={isSubmitting} >
                Sign Up
              </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default Register;
