import React from 'react';
import "./Footer.css";
const Footer = () => {
    const d = new Date();
let year = d.getFullYear();
    return (
        <div className='footer'>

              <h4> ©&nbsp;{year}</h4> 
              All Rights Reserved
               <br />
            <h2 className="social">
              <a href="https://www.instagram.com/">
              <i className="social fa-brands fa-instagram"></i>
                  </a>  
           <a href="https://www.facebook.com/">  <i className="social fa-brands fa-facebook"></i> </a> 
           <a href="https://discord.com/"> <i className="social fa-brands fa-discord"></i> </a> 
            </h2>
         
        </div>
    );
}

export default Footer;
