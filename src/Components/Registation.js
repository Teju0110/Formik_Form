import React from "react";
import image from "../image.jpg";
import "./Registration.css";
import { useFormik } from "formik";
import { registerValidation } from "./YupValidation";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cnfPassword: "",
};

const Registation = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: registerValidation,
    onSubmit: (values, action) => {
      console.log("🚀 ~ file: Registration.js ~ Registration ~ values", values);
      action.resetForm()
    },
  });

  console.log("🚀 ~ file: Registration.js ~ Registration ~ errors", errors);

  return (
    <div className="registation">
      <div className="registation_container">
        <div className="registation_form">
          <h1>Welcome !!</h1>
          <h3>My website Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="input_block">
              <label className="input_name" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? <p className="input_error">{errors.name}</p> : null}
              
            </div>
            <div className="input_block">
              <label className="input_name" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="name"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? <p className="input_error">{errors.email}</p> : null}
            </div>
            <div className="input_block">
              <label className="input_name" htmlFor="pwd">
                Password
              </label>
              <input
                type="password"
                id="pwd"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? <p className="input_error">{errors.password}</p> : null}
            </div>
            <div className="input_block">
              <label className="input_name" htmlFor="cnfPwd">
                Confirm Password
              </label>
              <input
                type="password"
                id="cnfPwd"
                placeholder="Confirm Password"
                name="cnfPassword"
                value={values.cnfPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cnfPassword && touched.cnfPassword ? <p className="input_error">{errors.cnfPassword}</p> : null}
            </div>
            <div className="registration_btn">
              <p>Want to Register using Gmail ?</p>
              <button>Register</button>
            </div>
          </form>
          <div className="login">
            <h3>Already Have Account?</h3>
            <p>Sign In Now</p>
          </div>
        </div>
        <div className="registation_image">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Registation;
