import React from 'react';
import "./Topbar.css";
const Topbar = () => {
    return (
        <div className="topbar">

        <nav class="navbar">

         <div class="logo">THE QURAN</div>

         <ul class="nav-links">

         <input type="checkbox" id="checkbox_toggle" />
         <label for="checkbox_toggle" class="hamburger">&#9776;</label>

         <div class="menu">
         <li><a href="/"><i class="fa-solid fa-house"></i> Home</a></li>
         <li><a href="/Surahs"><i class="fa-solid fa-book-quran"></i>Quran</a></li>
         <li class="services">
         <a ><i class="fa-solid fa-link"></i>Links</a>

         <ul class="dropdown">
         <li><a href="/">Audios(soon..)</a></li>
         <li><a href="/">Dua's(soon..)</a></li>
         <li><a href="/Hadith">Hadith</a></li>
         <li><a href="/developers">Developers</a></li>
    
         </ul>
         </li>
        
         <li><a href="/About"><i class="fa-solid fa-address-card"></i>About</a></li>
         <li><a href="/"><i class="fa-solid fa-magnifying-glass"></i></a></li>
         </div>
 
         </ul>
         </nav>
        </div>
    );
}

export default Topbar;
