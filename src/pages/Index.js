import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import rn from "../assets/rn.jpg";
import frame1 from "../assets/frame1.png";
import frameLogin from "../assets/frameLogin.png";
import cuestionario from "../assets/cuestionario.png";
import frameActividades from "../assets/frameActividades.png";
import Correr from "../assets/Correr.png";
import "../estilos/index.css";
import Button from "@mui/material/Button";
import axios from "axios";
import API from "../Api";
import todo from "../assets/todo.png";
import login from "../assets/login.jpg";
import notas from "../assets/notas.png";
import rutas from "../assets/rutas.jpg";
import correr from "../assets/correr.png";

function Index() {
  const navigate = useNavigate();

  return (
    <div class="main">
      <div class="container">
        <div class="section">
          <h1>
            PONGA EN PRACTICA ESTOS <br />
            CONSEJOS EN SU VIDA Y EVITE LA
            <br />
            MAYORIA DE ENFERMEDADES
          </h1>
          <div class="container_main">
            <div class="text">
              {" "}
              <p>
                Tiene en sus manos los 8 <br />
                remedios naturales
                <br />
                que Dios nos dejo para poder
                <br />
                mantenernos con buena salud o<br />
                para restablecer la salud
              </p>
            </div>
          </div>
          <center>
            <Button variant="outlined" href="/registration">
              Comenzar ahora
            </Button>
          </center>
        </div>
        <div class="libros">
          <img src={rn} />
        </div>
      </div>
      <hr />
      <div class="frame2">
        <div class="text">
          <div class="text2">
            <img src={todo} width="20%" />
          
          
            <h3>
              Incluye en tu vida los 8 <br />
              remedios naturales
            </h3>

            <p>
              Aqui encontraras los remedios que <br />
              necesites para cambiar tu vida.
            </p>
          </div>
        </div>
        <div class="cel">
          <img src={frame1} />
        </div>
      </div>
      <hr />
      <div class="frame2">
        <div class="text">
          <div class="image2">
            <img src={login} width="20%" />
          </div>
          <div class="text">
            <h3>Unete con tus redes sociales </h3>
            <p>
              para facilitar tu registro y unirte
              <br />
              podras hacerlo con tus
              <br />
              redes sociales.{" "}
            </p>
          </div>
        </div>
        <div class="cel">
          <img src={frameLogin} />
        </div>
      </div>
      <hr />
      <div class="frame2">
        <div class="text">
          <img src={rutas} width="20%" />
          <h3>Elige por donde empezar </h3>
          <p>
            Con las actividades disponibles
            <br />
            podrás reforzar los aspectos <br /> que necesites.{" "}
          </p>
        </div>
        <div class="cel">
          <img src={frameActividades} />
        </div>
      </div>
      <hr />

      <div class="frame2">
        <div class="text">
          <img src={notas} width="20%" />
          <h3>No sabes por donde empezar </h3>
          <p>
            Con este pequeño cuestionario
            <br />
            podremos ayudarte, y descubrir
            <br />
            por donde iniciar. <br />{" "}
          </p>
        </div>
        <div class="cel">
          <img src={cuestionario} />
        </div>
      </div>

      <div class="frame2">
        <div class="text">
          <img src={correr} width="20%" />
          <h3>
            Te ayudaremos a crear una rutina <br />
            de ejercicios.{" "}
          </h3>
          <p>
            podras marcar tu ruta y la distancia
            <br />
            recorrida, junto con un temporizador
            <br />
            para mantener los tiempos de ejercicio{" "}
          </p>
        </div>
        <div class="cel">
          <img src={Correr} />
        </div>
      </div>
      <div class="footer">
        <hr />
        <h1>
          Pruebelo Hoy Mismo <br />
          Comienze de forma gratuita. <br />
          Utilize los 8 remedios para mejorar su calidad de vida
        </h1>
        <Button href="/registration" variant="outlined">
          Comenzar ahora
        </Button>
      </div>
    </div>
  );
}

export default Index;
