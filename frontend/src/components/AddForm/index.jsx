import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export const AddForm = () => {
  const navigate = useNavigate();
  function handleSubmit(values) {
    fetch("http://localhost:3100/flowers", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    }).then((x) => navigate("/"));
  }
  return (
    <Formik
      initialValues={{ img: "", name: "", price: "" }}
      validationSchema={Yup.object({
        img: Yup.string().required("Required"),
        name: Yup.string().required("Required"),
        price: Yup.number().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      <Form>
        <label htmlFor="img">Img Url</label>
        <Field name="img" type="text" />
        <ErrorMessage name="img" />

        <label htmlFor="name">Flower Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="price">Flower Price</label>
        <Field name="price" type="text" />
        <ErrorMessage name="price" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
