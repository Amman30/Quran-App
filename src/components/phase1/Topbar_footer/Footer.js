import React from 'react';
import './Footer.css';

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <div className='footer'>
      <div>
        <footer className='footer'>
          <br /> <br />
          <h1> For The Humanity!!</h1>
          <address>
            <br />
            1-University Avenue, Awantipora, Pulwama, Jammu and Kashmir 192122
            <br />
          </address>
          <div className='legal'>
            <p>&copy; {year} All rights reserved.</p>
          </div>
          <div className='credits'>

            A Product of Department of Computer Science and Engineering, Islamic University of Science and Technology, Kashmir
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
