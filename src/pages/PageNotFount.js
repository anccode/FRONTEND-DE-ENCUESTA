import React from 'react'
import "../estilos/styles.css";


import  NE from "../assets/NE.jpg";


function PageNotFount() {
    return (
        <div class="aea">
            <link href = "https: //fonts.googleapis.com/css2? family = Rubik: wght @ 500 & display = swap "rel =" stylesheet "></link>
        <center><h1 class="titulo-PX"> PAGE NO FOUNT</h1></center>
        <link href = "https: //fonts.googleapis.com/css2? familia = Raleway: wght @ 100 &family = Rubik: wght @ 500 & display = swap "rel =" stylesheet "></link>
            <h2> page not found sorry you can return to the main man by pressing this button 🥺  </h2>
        


         <div class="image">
             <a href='index.js'> Regresar Home </a>
         <img src={NE} />
       </div>
       </div>
    )
}

export default PageNotFount;
