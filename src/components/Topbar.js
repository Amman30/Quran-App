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
                        <li><Link to="/developers"><i className="fa-brands fa-connectdevelop"></i>Developers</Link></li>


                        <li className="services">
                            <i className="fa-solid fa-link"></i>Links

                            <ul className="dropdown">
                                <li><Link to="/audios">Audios(soon..)</Link></li>
                                <li><Link to="/">Dua's(soon..)</Link></li>
                                <li><Link to="/Hadith">Hadith</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/About"><i className="fa-solid fa-address-card"></i>About</Link></li>

                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Topbar;
