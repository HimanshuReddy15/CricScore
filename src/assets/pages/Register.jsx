import React from "react";
import "../styles/Register.css";

function Register() {
  return (
    <div className="registration-form">
      <form method="POST">
        <fieldset className="box">
          <h1>Registration Form</h1>
          <div className="Tname">
            <label htmlFor="Tname">
              <strong>Team Name:- </strong>
            </label>
            <input type="text" id="Tname" name="Tname" autoComplete="off" required />
          </div>
          <div className="Cname">
            <label htmlFor="Cname">
              <strong>Coach Name:- </strong>
            </label>
            <input type="text" id="name" name="Cname" autoComplete="off" />
          </div>

          <h2 className="player-details">player details</h2>
          <div className="details">
            <strong>Player name:</strong>
            <input type="text" name="pname" id="pname" autoComplete="off" />
            <strong>Age:</strong> <input type="number" name="Age" id="Age" autoComplete="off" />
            <strong>Position:</strong>
            <input type="text" id="Position" name="Position" autoComplete="off" />
            <strong>Arm:</strong>
            <select name="Arm" id="Arm">
              <option></option>
              <option value="left">Left Arm</option>
              <option value="right">Right Arm</option>
            </select>
          </div>
          <div className="contact-details">
            <label htmlFor="gmail">
              <strong>Mail ID:- </strong>
            </label>
            <input type="email" id="email" name="gmail" autoComplete="off" />
            <label htmlFor="phonenumber">
              <strong>Phone Number:- </strong>
            </label>
            <input type="text" id="phonenumber" name="phonenumber" autoComplete="off" />
          </div>
          <div className="address">
            <label htmlFor="address">
              <strong>Address:-</strong>
            </label>
            <input type="text" id="address" name="address" autoComplete="off" />
            <label htmlFor="city">
              <strong>City:-</strong>
            </label>
            <input type="text" id="city" name="city" autoComplete="off" />
            <label htmlFor="state">
              <strong>State:-</strong>
            </label>
            <input type="text" id="state" name="state" autoComplete="off" />
          </div>

          <button type="submit" id="submit" name="submit" value="Register">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;
