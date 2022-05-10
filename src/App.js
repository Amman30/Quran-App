import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Chapters from "./components/Chapters";
import Verses from "./components/Verses";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Hadith from "./components/Hadith";
import Dev from "./components/Dev.js";
import Audios from "./components/Audios";
import Duas from "./components/Duas";



function App() {
    return (
        <div className="app">
            <Topbar />
            <div className="route">
                <Routes>
                    <Route path="/" element={<Chapters />} />
                    <Route path="/:id" element={<Verses />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Hadith" element={<Hadith />} />
                    <Route path="/developers" element={<Dev />} />
                    <Route path="/audios" element={<Audios />} />
                    <Route path="/duas" element={<Duas />} />
             
                </Routes>

                <Footer />
            </div>
        </div>
    );
}

export default App;
