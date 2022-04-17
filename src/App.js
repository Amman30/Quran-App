import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from 'react';

import Chapters from "./Chapters";
import Verses from "./Verses";
import Topbar from "./Topbar";
import Surahs from "./Surahs";
import Footer from "./Footer";
import About from "./About";
import Hadith from "./Hadith";
import Dev from "./Dev.js"
alert("pls use PC for best case scenario..")
function App() {


  return (
    <div className="app">

      <Topbar />


      <br /> <br /> <br /><br /> 


      <div className="route">

        <Routes>
          <Route path="/" element={<Chapters />} />
          <Route path="/:id" element={<Verses />} />
          <Route path="/surahs" element={<Surahs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Hadith" element={<Hadith />} />
          <Route path="/developers" element={<Dev />} />

        </Routes>

        <Footer />

      </div>

    </div>
  );
}

export default App;

