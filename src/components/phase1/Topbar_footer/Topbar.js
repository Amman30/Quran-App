
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';

const Topbar = () => {


  const handleClick = () => {

    window.location.reload()

  }

  return (

    <div className='topbar'>
      <nav>
        <div className='navbar'>
          <div className='container nav-container'>
            <input className='checkbox' type='checkbox' name='' id='' />
            <div className='hamburger-lines'>

              <span className='line line1'></span>
              <span className='line line2'></span>
              <span className='line line3'></span>
            </div>
            <div className='logo'>
              <h1><Link style={{ color: "black" }} to="/">ILLUSTRIOUS QURAN</Link></h1>

            </div>

            {/* <Link to="/login"><div className='logo-pp'><img className='logo-pp' src={logoo} /></div></Link> */}
            <div className='menu-items'>
              <li className="litag" onClick={handleClick}>
                <Link to='/'><i className='iconn fa-solid fa-house-user'></i>Home</Link>
              </li>
              <li className="litag" onClick={handleClick}>
                <Link to='/developers'> <i className='iconn fa-brands fa-connectdevelop'></i>Developers </Link>
              </li>
              <li className="litag" onClick={handleClick}>
                <Link to='/About'> <i className='iconn fa-solid fa-address-card'></i>About Us  </Link>
              </li>
              {/* <li>
                <Link to='/Hadith'> <i className='iconn fa-solid fa-book'></i>Hadith </Link>
              </li> */}
              {/* <li>
                <Link to='/names'><i className='fa-solid fa-list-ol'></i> Asma Ul husna </Link>
              </li> */}
              <li className="litag" onClick={handleClick}>
                <Link to='/contact'> <i className='fa-solid fa-address-book'></i>Contact  </Link>
              </li>
              {/* <li className="litag" onClick={handleClick}>
                <Link to='/duas'><i className='iconn fa-solid fa-hands-praying'></i>Dua's(soon)  </Link>
              </li>
              <li className="litag" onClick={handleClick}>
                <Link to='/audios'>  <i className='iconn fa-solid fa-circle-play'></i>Audios(soon) </Link>
              </li> */}

            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
