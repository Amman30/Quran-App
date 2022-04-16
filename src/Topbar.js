import React from 'react';
import { Link } from 'react-router-dom';
import "./Topbar.css";
const Topbar = () => {
    return (
        <div className="topbar">

        <nav className="navbar">

         <div className="logo">THE QURAN</div>

         <ul className="nav-links">

         <input type="checkbox" id="checkbox_toggle" />
         <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

         <div className="menu">
         <li><Link to="/"><i className="fa-solid fa-house"></i> Home</Link></li>
         <li><Link to="/Surahs"><i className="fa-solid fa-book-quran"></i>Quran</Link></li>
         <li className="services">
         <a href="#"><i className="fa-solid fa-link"></i>Links</a>

         <ul className="dropdown">
         <li><Link to="/">Audios(soon..)</Link></li>
         <li><Link to="/">Dua's(soon..)</Link></li>
         <li><Link to="/Hadith">Hadith</Link></li>
         <li><Link to="/developers">Developers</Link></li>

         </ul>
         </li>

         <li><Link to="/About"><i className="fa-solid fa-address-card"></i>About</Link></li>
         <li><Link to="/"><i className="fa-solid fa-magnifying-glass"></i></Link></li>
         </div>

         </ul>
         </nav>
        </div>
    );
}

export default Topbar;
