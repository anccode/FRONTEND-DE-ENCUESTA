import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Resultados() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [resultados, setResultados] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/cuestionarios/resultados")
      .then((response) => {
        setResultados(response.data);
      });
  }, []);
  return (
    <div>
      {resultados.map((value, key) => {
        return (
          <div>
            {value.p1 === true ? (
              <>
                <h1>Exelecte tomas aire puro!!!</h1>
              </>
            ) : (
              <>
                <h1>Tienes que abrir tus ventanas :(</h1>
              </>
            )}
            {value.p2 === true ? (
              <>
                <h1>Exelente duermes muy bien asi viviras mas!!!</h1>
              </>
            ) : (
              <>
                <h1>Tienes que domir mas porque si no viviras poco :(</h1>
              </>
            )}
            {value.p3 === true ? (
              <>
                <h1>Exelente Comes a la hora :D</h1>
              </>
            ) : (
              <>
                <h1>
                  Tienes que comer a la hora porque sino puedes tener
                  emfermedades como gastritis :(
                </h1>
              </>
            )}
            {value.p4 === true ? (
              <>
                <h1>
                  Exelente tomas mucha agua asi siempre estaras hidratado :D
                </h1>
              </>
            ) : (
              <>
                <h1>Tienes que tomar mas agua eso te ara mas sano</h1>
              </>
            )}
            {value.p5 === true ? (
              <>
                <h1>
                  Exelecte haces ejercicio asi te mantendras motivado y fuerte
                </h1>
              </>
            ) : (
              <>
                <h1>
                  Si quieres tener un buen cuerpo tienes que hacer mas ejercicio
                  :(
                </h1>
              </>
            )}
            {value.p6 === true ? (
              <>
                <h1>Exelente tomas descansos en el trabajo</h1>
              </>
            ) : (
              <>
                <h1>
                  Te recomendamos la tecnica pomodoro para que no te estreses
                  mucho
                </h1>
              </>
            )}
            {value.p7 === true ? (
              <>
                <h1>Exelente la confianza nunca se debe perder</h1>
              </>
            ) : (
              <>
                <h1>Te recomendamos leer libros de dessarrollo personal</h1>
              </>
            )}
            {value.p8 === true ? (
              <>
                <h1>
                  Exelente hay horarios para exponerse a la luz del sol bien ahi
                </h1>
              </>
            ) : (
              <>
                <h1>
                  Tienes que exponerte al sol entre antes de las 10am y despues
                  de las 3pm para generar vitamina d{" "}
                </h1>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Resultados;
