import React, {useContext, useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import axios from 'axios'
import API from '../Api'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import "../estilos/CreatePost.css"


function CreatePost() {
  const {authState} = useContext(AuthContext);
  let navigate = useNavigate();
  const initialValues = {
        title: "",
        postText: "",
        
    };

    useEffect(()=>{
      if(!localStorage.getItem("accessToken")){
        navigate("/login")
      }
    },[])

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Este campo es requerido"),
        posttext: Yup.string().required("Este campo es requerido"),
    })

    const onSubmit = (data) =>{

        //console.log(data);
        axios.post(API, data, {headers: { accessToken: localStorage.getItem("accessToken") },
      }).then((response)=>{
          navigate('/posthome')
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
          <ErrorMessage name="posttext" component="span" />
          <Field
          autoComplete="off"
            id="inputCreatePost"
            name="posttext"
            placeholder="(Ex. Post...)"
          />

          <button type="onSubmit"> Create Post </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
