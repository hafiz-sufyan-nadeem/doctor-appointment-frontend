import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login',{
        email: email,
        password: password,
      })
      console.log(response.data)
    } catch (error) {
      setError("Login failed. Check your credentials.");
      console.logP(error)
    }
  }

  return (
    <>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <input 
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder='Email' 
      />

      <input 
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Password' 
      />

      <button type='submit'>Login</button>
    </form>

    </>
  )
}

export default Login
