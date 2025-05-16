import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken, setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/login", { email, password },{ withCredentials: true });
      setToken(res.data.token);
      setUserId(res.data.userId);
      // Save to localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      setMsg("Login successful");
      console.log(res.data);
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      <p>{msg}</p>
    </form>
  );
};

export default Login;