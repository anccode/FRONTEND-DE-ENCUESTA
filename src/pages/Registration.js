import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import '../estilos/Registration.css'

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
    peso: Yup.string().min(1).max(25).required(),
    estatura: Yup.string().min(1).max(25).required(),
    password: Yup.string().min(4).max(20).required(),
  });
  const onSubmit = (data) =>{
    //console.log(data);
    axios.post("http://localhost:3001/auth", data).then(()=>{
      navigate("/login")
    });
}
  
  
  return (
  <div className="createPostContainer">
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
          <label>Correo:</label>
          <ErrorMessage name="correo" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="correo"
            placeholder="(Ex. angel@upeu.edu.pe)"
          />
          <label>Peso:</label>
          <ErrorMessage name="peso" component="span" />
          <div class="medidas">
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="peso"
            type="number"
            placeholder="(50.5)"
          />
          <div class="text">
          <p>Kilos</p>
          </div>
          </div>
          <label>Estatura:</label>
          <ErrorMessage name="estatura" component="span" />
          <div class="medidas">
          <div><Field
            autoComplete="off"
            id="inputCreatePost"
            name="estatura"
            type="number"
            placeholder="(1.60)"
          /></div>
          <div class="text">
          <p>Metros</p>
          </div>
          </div>
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
