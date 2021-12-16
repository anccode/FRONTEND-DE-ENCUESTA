import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";
import "../estilos/Login.css";
import toast, { Toaster } from "react-hot-toast";
import loginNiño from "../assets/loginNiño.png";
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
      <div class="img">
        <img src={loginNiño}  />
      </div>
      <div class="login">
        <label> CORREO </label>
        <input
          type="email"
          onChange={(event) => {
            setCorreo(event.target.value);
          }}
        />

        <label> CONTRASEÑA </label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button onClick={login}>INICIAR SESION</button>
      </div>
    </div>
  );
}

export default Login;
