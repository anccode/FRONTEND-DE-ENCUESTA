import React from "react";
import "../estilos/Home.css";
import RO from "../assets/RO.jpg";

function Home() {
  return (
    
    <div class="home">
      <div class="contenedor">
     <center><h1 class="texto">8 REMEDIOS NATURALES</h1></center>
      
      <div class="contenedordos">
      <div class="parrafo">
                {" "}
        <br></br><b><p>
      Son aquellas técnicas utilizadas desde el hogar a partir de las plantas<br />
        naturales que nos brinda el medio ambiente y que cuentan con <br />
       propiedades muy efectivas para hacer frente a problemas de salud <br />
       en el cuerpo humano.<br />
       
       <br></br>
       “Así que, hermanos, os ruego por las misericordias de Dios, que<br /> 
       presentéis vuestros cuerpos en sacrificio vivo, santo, agradable a Dios,<br />
        que es vuestro culto racional. No os conforméis a este siglo, sino<br />
        transformaos<br />
        por medio de la renovación de vuestro entendimiento, para que comprobéis <br />
        cuál sea <br />
        la buena voluntad de Dios, agradable y perfecta”.<br />
        Romanos 12:1, 2<br />
        </p></b>
       </div>
       </div>
      
       <div class = "aire">
       <div class =" contenedortres">

         <center><h1 class= "airepuro">AIRE PURO </h1></center>
        
        <b><p class= "parrafoaire">Al respirar aire puro el cuerpo absorbe oxígeno y favorece la oxigenación<br />
           celular eliminando las toxinas del organismo. Adiós estrés. Respirar<br /> 
           profundamente aire puro calma y relaja el sistema nervioso contribuyendo a <br />
           un estado de bienestar general. ¡Más vitalidad!<br />
           <br></br>
           La respiración de aire puro ayuda a estimular nuestro sistema inmunológico,<br />
            reduciendo la posibilidad de padecer trastornos alérgicos, afecciones respiratorias <br />
            y asma. Al respirar aire limpio se consigue eliminar un gran número de toxinas acumuladas,<br />
             y células muertas, diariamente en nuestro organismo<br />
           </p></b>

       </div>
       
    
       </div>
       </div>
       
       <div class="image">
            <img src={RO} />
          </div>
          
          
       
      
       
    
        
    </div>
   
    
  );
}

export default Home;
