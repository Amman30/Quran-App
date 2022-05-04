import React from "react";
import { Link } from 'react-router-dom';
import "./Topbar.css";
const Topbar = () => {
    return (
        <div className="topbar">
   <div className="menu-container">
  
  <input type="checkbox" id="openmenu" className="hamburger-checkbox" />
  
  <div className="hamburger-icon">
    <label htmlFor="openmenu" id="hamburger-label">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </label>    
  </div>

    <div className="menu-pane">
      
      <nav>
        <ul className="menu-links">
          <li><Link className="liii" to="/">Home</Link><span id="QC-info">
    
          </span>
            
          </li>
          
          <li><Link className="liii" to="/developers">Developers</Link>
           
          </li>
          <li><Link className="liii" to="/Hadith">Hadith</Link></li>
     
        </ul>
         <ul className="menu-links">
                     <li><Link className="liii" to="/About">About</Link>
                       <span id="DC-info">
            
          </span></li>

          <li><Link className="liii" to="/Quran-App">Dua's(soon...)</Link></li>
        
            <li><Link className="liii" to="/Quran-App">Audios(soon...)</Link></li>
        </ul>
        
        
      </nav>
    </div>
  <div className="body-text">
    <h1 className="Quran"> The Quran</h1>

 
  </div>
</div>
</div>


    );
};

export default Topbar;
