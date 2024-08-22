import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
export default function SignUp() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        profession: ''
      });
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(user));
        alert('User registered successfully!');
      };

  return (
    <div className="signup-container">
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="username"
          name="name"
          autoComplete='off'
          placeholder='Enter your name'
          value={user.name}
          onChange={handleChange} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete='off'
          placeholder='Enter your email'
          value={user.email} 
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          autoComplete='off'
          placeholder='Enter Phone No.'
          value={user.phone} 
          onChange={handleChange}
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
          value={user.password} 
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
      <label>Profession:</label>
        <select name="profession" value={user.profession} onChange={handleChange} required>
          <option value="">Select Profession</option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Teacher">Teacher</option>
        </select><br />
        </div>
      <button type="submit" className="submit-button">
        Sign Up
      </button>
    </form>
  </div>
  )
}
