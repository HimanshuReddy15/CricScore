import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      
           <Link><InstagramIcon /></Link> 
           <Link><TwitterIcon /></Link> 
           <Link><WhatsAppIcon /></Link>
           <Link><FacebookIcon /></Link> 
           
      </div>
      <p>&copy; 2023 CricScore </p>
    </div>
  )
}

export default Footer;
