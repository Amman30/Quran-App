import React from 'react';
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
         <li><a href="/"><i className="fa-solid fa-house"></i> Home</a></li>
         <li><a href="/Surahs"><i className="fa-solid fa-book-quran"></i>Quran</a></li>
         <li className="services">
         <a ><i className="fa-solid fa-link"></i>Links</a>

         <ul className="dropdown">
         <li><a href="/">Audios(soon..)</a></li>
         <li><a href="/">Dua's(soon..)</a></li>
         <li><a href="/Hadith">Hadith</a></li>
         <li><a href="/developers">Developers</a></li>
    
         </ul>
         </li>
        
         <li><a href="/About"><i className="fa-solid fa-address-card"></i>About</a></li>
         <li><a href="/"><i className="fa-solid fa-magnifying-glass"></i></a></li>
         </div>
 
         </ul>
         </nav>
        </div>
    );
}

export default Topbar;
