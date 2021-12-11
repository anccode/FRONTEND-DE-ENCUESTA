import React from "react";
import { Link } from "react-router-dom";
import rn from "../assets/rn.jpg";
import "../estilos/index.css";
import Button from '@mui/material/Button';

function Index() {
  return (
    <div>
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
            <Button variant="outlined" >Comenzar ahora</Button>
          </div>
          <div class="image">
            <img src={rn} />
          </div>
        </div>
        <hr/>

      </div>
  );
}

export default Index;
