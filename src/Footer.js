import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
    const d = new Date();
let year = d.getFullYear();
    return (
        <div className='footer'>

              <h4 className="year"> ©&nbsp;{year}</h4> 
              All Rights Reserved
               <br />
            <h2 className="social">
              <a href="https://www.instagram.com/">
              <i className="social fa-brands fa-instagram"></i>
                  </a>  
           <Link to="https://www.facebook.com/">  <i className="social fa-brands fa-facebook"></i> </Link> 
           <Link to="https://discord.com/"> <i className="social fa-brands fa-discord"></i> </Link> 
            </h2>
         
        </div>
    );
}

export default Footer;
