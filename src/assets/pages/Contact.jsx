import React from 'react'
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="page">
    <div className="about">
      <h1>About Us</h1>
      <p>A website which allows the players to register themselves individually using
their details. It also allows the entry of a complete cricket team with 15
players minimum, forming a cricket club . This website helps to locate clubs
nearby to organize matches and also organize tournaments gathering
various clubs. The personal information is visible only to the authorized
people with the login credentials . I am looking forward to develop the
website further with a score keeping option and player profile option.</p>
    </div>
    <div className="contact-us">
      <table>
      <tr>
        <th>Social Media</th>
        <th> Handle </th>
      </tr>
      <tr>
          <td>Gmail</td>
          <td>Cricscore@gmail.com</td>
      </tr>
      <tr>
          <td>Instagram</td>
          <td>Cric_score</td>
      </tr>
      <tr>
          <td>Phone Number</td>
          <td>	9447771122</td>
      </tr>
      </table>
    </div>
    </div>
  )
}

export default Contact
