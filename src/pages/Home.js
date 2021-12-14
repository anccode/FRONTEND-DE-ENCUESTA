import React from "react";
import "../estilos/Home.css";
import LOS from "../assets/LOS.jpg";

function Home() {
  return (
    <div>
    <div class="home">
      <h1 class="texto">8 REMEDIOS NATURALES</h1>
      
      <p class="pocoyo">
      Son aquellas técnicas utilizadas desde el hogar a partir de las plantas<br />
        naturales que nos brinda el medio ambiente y que cuentan con <br />
       propiedades muy efectivas para hacer frente a problemas de salud <br />
       en el cuerpo humano.<br />   </p> </div>
       
       <div class="image">
            <img src={LOS} />
          
        
        
        
          </div>
    </div>
  );
}

export default Home;
