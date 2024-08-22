import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      const storedUser = JSON.parse(localStorage.getItem('user'));
      
      if (storedUser && storedUser.name === name && storedUser.password === password) {
        alert('Login Successful');
        navigate('/movielist')
      } else {
        alert('Invalid Credentials');
      }
    };
  
  return (
    <div className="signup-container">
    <form className="signup-form" onSubmit={handleLogin}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="username"
          name="name"
          autoComplete='off'
          placeholder='Enter your name'
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete='off'
          placeholder='Enter Password'
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="submit-button">
        Login
      </button>
    </form>
  </div>
  )
}
