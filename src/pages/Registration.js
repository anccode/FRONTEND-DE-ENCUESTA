import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });
  const onSubmit = () => {};
  
  
  return (
  <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>User Name:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. Angel...)"
          />
          <label>Password:</label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="password"
            placeholder="*********"
          />
          <button type="onSubmit"> Create Post </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
