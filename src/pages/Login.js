import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import "../estilos/Login.css";
function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    const data = { correo: correo, password: password };

    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        setAuthState({
          correo: response.data.correo,
          id: response.data.id,
          status: true,
        });
        navigate("/home");
      }
    });
  };
  return (
    <div class="loginContainer">
      <div class="login" >
        <label> USUARIO </label>
        <input
          type="Text"
          onChange={(event) => {
            setCorreo(event.target.value);
          }}
        />
      </div>
      <div class="login" >
      <label> CONTRASEÑA </label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      </div>
      <button onClick={login}>INICIAR SESION</button>
    </div>
  );
}

export default Login;
