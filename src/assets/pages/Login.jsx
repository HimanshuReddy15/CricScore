import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  return (
    <div className="login-form">
      <form method="POST" className="login">
      <fieldset className="box1">
          <h1 className="heading">LOGIN</h1>
          <div className="email">
            <label htmlFor="email">Email</label>
            </div>
            <div className="email">
            <input type="text" placeholder="Email ID" name="email" autoComplete="off" />
          </div>
          <div className="password">
            <label htmlFor="email">Password</label>
            </div>
            <div className="password">
            <input type="password" placeholder="Password" name="password" autoComplete="off" />
          </div>
          <button type="submit">Login</button>
          </fieldset>
          <Link to="/signup">Create an account</Link>
      </form>
      
    </div>
  )
}

export default Login
