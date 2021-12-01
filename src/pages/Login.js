import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
      const data = {username: username, password: password}
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if(response.data.error) alert(response.data.error);
      sessionStorage.setItem("accessToken", response.data);
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
