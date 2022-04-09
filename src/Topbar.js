import React from 'react';
import "./Topbar.css";
const Topbar = () => {
    return (
        <div className="topbar">

<nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <h1 className="navbar-brand">THE QURAN</h1>
 

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
     
      <li className="nav-item">
      <a className="nav-link" href="/"> <i class="fa-solid fa-house-chimney"></i> Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/surahs"><i className="icons fa-solid fa-book-quran"></i>Quran</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About"><i className="icons fa-solid fa-address-card"></i> About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Developers"> <i className="icons fa-brands fa-connectdevelop"></i>Developers</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/SEARCH"><i className="icons fa-solid fa-magnifying-glass"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>






        </div>
    );
}

export default Topbar;


