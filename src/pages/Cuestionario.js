import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import API from "../Api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import "../estilos/CreatePost.css";


function Cuestionario() {
 
  let navigate = useNavigate();
  const initialValues = {
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: "",
    p9: "",
    p10: "",
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);

  const validationSchema = Yup.object().shape({
    p1: Yup.string().required("Este campo es requerido"),
    p2: Yup.string().required("Este campo es requerido"),
    p3: Yup.string().required("Este campo es requerido"),
    p4: Yup.string().required("Este campo es requerido"),
    p5: Yup.string().required("Este campo es requerido"),
    p6: Yup.string().required("Este campo es requerido"),
    p7: Yup.string().required("Este campo es requerido"),
    p8: Yup.string().required("Este campo es requerido"),
    p9: Yup.string().required("Este campo es requerido"),
    p10: Yup.string().required("Este campo es requerido"),
  });

  const onSubmit = (data) => {
    //console.log(data);
    axios
      .post("http://localhost:3001/cuestionarios/", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        navigate("/posthome");
      });
  };

  return (
    <div className="createPostContainer">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
        <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p1"
            placeholder="(Ex. Post...)"
          />

          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p2"
            placeholder="(Ex. Post...)"
          />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p3"
            placeholder="(Ex. Post...)"
          />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p4"
            placeholder="(Ex. Post...)"
          />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p5"
            placeholder="(Ex. Post...)"
          />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p6"
            placeholder="(Ex. Post...)"
          />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p7"
            placeholder="(Ex. Post...)"
          />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p8"
            placeholder="(Ex. Post...)"
          />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p9"
            placeholder="(Ex. Post...)"
          />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="p10"
            placeholder="(Ex. Post...)"
          />

          <button type="onSubmit"> Create Post </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Cuestionario;
