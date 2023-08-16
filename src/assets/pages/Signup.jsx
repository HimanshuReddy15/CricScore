import React from 'react'
import "../styles/Signup.css"

function Signup() {
  return (
    <div className="signup-form">
      <form method="POST" className="signup">
          <fieldset className="box2">
              <h1 className="heading">SIGN UP</h1>
              <div className="email">
            <label htmlFor="email">Email</label>
            </div>
            <div className="email">
            <input type="text" placeholder="Email ID" name="email" autoComplete="off" />
          </div>
          <div className="phonenumber">
          <label htmlFor="phonenumber">Phone Number</label>
          </div>
          <div className="phonenumber">
              <input type="text" name="phonenumber" placeholder="Phone number" />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            </div>
            <div className="password">
            <input type="password" placeholder="Password" name="password" autoComplete="off" />
          </div>
          <div className="retype-password">
            <label htmlFor="password"> Retype-Password</label>
            </div>
            <div className="retype-password">
            <input type="password" placeholder="Password" name="password" autoComplete="off" />
          </div>
          <button type="submit">Sign Up</button>
          </fieldset>
      </form>
    </div>
  )
}

export default Signup
