import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Registration() {
  const navigate = useNavigate()
  const initialValues = {
    username: "",
    correo: "",
    peso: "",
    estatura: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    correo: Yup.string().min(3).max(25).required(),
    peso: Yup.string().min(3).max(25).required(),
    estatura: Yup.string().min(3).max(25).required(),
    password: Yup.string().min(4).max(20).required(),
  });
  const onSubmit = (data) =>{
    //console.log(data);
    axios.post("http://localhost:3001/auth", data).then(()=>{
      navigate("/login")
    });
}
  
  
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
          <ErrorMessage name="correo" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="correo"
            placeholder="(Ex. angel@upeu.edu.pe)"
          />
          <ErrorMessage name="peso" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="peso"
            placeholder="(50.5)"
          />
          <ErrorMessage name="estatura" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="estatura"
            placeholder="(1.60)"
          />
          <label>Password:</label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="password"
            type="password"
            placeholder="*********"
          />
          <button type="onSubmit"> Registrarte   </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
