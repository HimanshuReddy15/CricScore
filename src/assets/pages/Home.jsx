import React from 'react'
import { Link } from 'react-router-dom';


import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
       <div className="headerContainer">
        <h1>CricScore</h1>
        <p>Always the mood for cricket...</p>
        <Link to="/register">
        <button> Register Now </button>
        </Link> 
    </div>
    </div>
  )
}

export default Home
