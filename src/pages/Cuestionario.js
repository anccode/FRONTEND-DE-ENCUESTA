import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import API from "../Api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import "../estilos/CreatePost.css";
import Switch from "@mui/material/Switch";

function Cuestionario() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
          <h1> Cuestionario </h1>
          <div class="container">
            <label>sueles dejar que entre aire donde estas</label>
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="p1"
              type="checkbox"
            />
          </div>
        
          <div class="container">
            <label>sueles dormir entre 7 y 8 horas</label>
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="p2"
              type="checkbox"
            />
          </div>

          <div class="container">
            <label>sueles comer a la hora correcta</label>
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="p3"
              type="checkbox"
            />
          </div>
          <div class="container">
            <label>sueles tomar 2 o mas litros de agua</label>
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="p4"
              type="checkbox"
            />
          </div>
          <div class="container">
            <label>sueles hacer ejercicio</label>
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="p5"
              type="checkbox"
            />
          </div>
          <div class="container">
            <label>trabajas seguido o te tomas descansos</label>
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="p6"
              type="checkbox"
            />
          </div>
          <div class="container">
            <label>tienes confianza en ti mismo</label>
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="p7"
              type="checkbox"
            />
          </div>
          <div class="container">
            <label>
              te expones al sol antes de las 10am o despues de las 3 pm
            </label>
            <Field
              autoComplete="off"
              id="inputCreatePost"
              name="p8"
              type="checkbox"
            />
          </div>
          <button type="onSubmit"> Generar Respuestas </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Cuestionario;
