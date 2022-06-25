import React from 'react';

import './Footer.css';
// import View from "./View";
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className='footer'>
      <footer className='footer'>
        <h1 className='footer__logo'> For The Humanity!!</h1>
        <br /> <br />
        <h2>Contact</h2>
        <address>
          1-University Avenue, Awantipora, Pulwama, Jammu and Kashmir 192122
          <br />
        </address>
        <div className='legal'>
          <p>&copy; {year} All rights reserved.</p>
        </div>
        {/* <View /> */}
      </footer>
    </div>
  );
};

export default Footer;
