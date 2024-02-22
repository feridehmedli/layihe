import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import toast from "react-hot-toast";
import './AddProduct.scss'

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.image) {
    errors.image = "Required";
  }

  if (!values.desc) {
    errors.desc = "Required";
  }

  if (!values.price) {
    errors.price = "Required";
  }

  return errors;
};

const AddProduct = () => {
  const [data, setData] = useState();
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      desc: "",
      price: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:8080/recentlyFavourited/", values);
        toast.success("Product was added")
        setData(res.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="image">Image</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.image}
      />
      {formik.touched.image && formik.errors.image ? <div>{formik.errors.image}</div> : null}

      <label htmlFor="desc">Description</label>
      <input
        id="desc"
        name="desc"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.desc}
      />
      {formik.touched.desc && formik.errors.desc ? <div>{formik.errors.desc}</div> : null}

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
      />
      {formik.touched.price && formik.errors.price ? <div>{formik.errors.price}</div> : null}

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;
