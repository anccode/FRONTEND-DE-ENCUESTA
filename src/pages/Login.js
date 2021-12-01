import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  
  const login = () => {
    const data = { username: username, password: password };


    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (!response.data.error) {
        alert(response.data.error);
      } else {
        sessionStorage.setItem("accessToken", response.data);
        navigate("/");
      }
    });
  };
  return (
    <div>
      <input
        type="Text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={login}>INICIAR SESION</button>
    </div>
  );
}

export default Login;
