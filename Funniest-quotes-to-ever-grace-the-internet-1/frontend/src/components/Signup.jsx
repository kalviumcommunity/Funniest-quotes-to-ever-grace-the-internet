import React, { useState, useEffect } from 'react'

import axios from "axios";

const Signup = ({ setToken, setUserId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/register", { name, email, password });
      setToken(res.data.token);
      setUserId(res.data.userId);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
      setMsg("Signup successful");
    } catch (err) {
      setMsg(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
      <button type="submit">Signup</button>
      <p>{msg}</p>
    </form>
  );
};

export default Signup;

