import React from "react";

import "./Topbar.css";
const Topbar = () => {
    return (
        <div className="topbar">
   <div class="menu-container">
  
  <input type="checkbox" id="openmenu" class="hamburger-checkbox" />
  
  <div class="hamburger-icon">
    <label for="openmenu" id="hamburger-label">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </label>    
  </div>

    <div class="menu-pane">
      
      <nav>
        <ul class="menu-links">
          <li><a href="/Quran-App">Home</a><span id="QC-info">
    
          </span>
            
          </li>
          
          <li><a href="/Quran-App/developers">Developers</a>
           
          </li>
          <li><a href="/Quran-App/Hadith">Hadith</a></li>
     
        </ul>
         <ul class="menu-links">
                     <li><a href="/Quran-App/About">About</a>
                       <span id="DC-info">
            {/* <p>+1 202-472-3850</p> */}
          </span></li>

          <li><a href="/Quran-App">Dua's(soon...)</a></li>
        
            <li><a href="/Quran-App">Audios(soon...)</a></li>
        </ul>
        
        
      </nav>
    </div>
  <div class="body-text">
    <h1 className="Quran"> The Quran</h1>

 
  </div>
</div>
</div>


    );
};

export default Topbar;
