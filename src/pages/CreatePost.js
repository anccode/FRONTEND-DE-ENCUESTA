import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import axios from 'axios'
import API from '../Api'
import { useNavigate } from "react-router-dom";

function CreatePost() {
  let navigate = useNavigate();
  const initialValues = {
        title: "",
        postText: "",
        userName: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Este campo es requerido"),
        postText: Yup.string().required("Este campo es requerido"),
        userName: Yup.string().min(3).max(15).required()
    })

    const onSubmit = (data) =>{
        //console.log(data);
        axios.post(API, data).then((response)=>{
          navigate('/')
        });
    }
    

    return (
    <div className="createPostContainer">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
      <Form className="formContainer">
          <ErrorMessage name="title" component="span" />
          <label>Title:</label>
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title...)"
          />

          <label>Post:</label>
          <ErrorMessage name="postText" component="span" />
          <Field
          autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. Post...)"
          />

          <label>User Name:</label>
          <ErrorMessage name="userName" component="span" />
          <Field
          autoComplete="off"
            id="inputCreatePost"
            name="userName"
            placeholder="(Ex. Angel...)"
          />
          <button type="onSubmit"> Create Post </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
