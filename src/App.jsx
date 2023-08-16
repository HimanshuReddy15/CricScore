import React, { useState } from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from './assets/pages/Home';
import Clubs from './assets/pages/Clubs';
import Register from './assets/pages/Register';
import Contact from './assets/pages/Contact';
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import Footer from './assets/components/Footer';
import './App.css'

function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clubs" element={<Clubs />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <Footer />
    </Router>
    </>
  )
}

export default App
