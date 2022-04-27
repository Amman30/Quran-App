import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from 'react';
import Chapters from "./Chapters";
import Verses from "./Verses";
import Topbar from "./Topbar";
import Footer from "./Footer";
import About from "./About";
import Hadith from "./Hadith";
import Dev from "./Dev.js"
import Reading from "./Reading";

function App() {


  return (
    <div className="app">
      <Topbar />
      <br /> <br /> <br />
      <div className="route">
        <Routes>
          <Route path="/" element={<Chapters />} />
          <Route path="/:id" element={<Verses />} />
          <Route path="/About" element={<About />} />
          <Route path="/Hadith" element={<Hadith />} />
          <Route path="/developers" element={<Dev />} />
          <Route path="/reading/:id" element={<Reading />} />

        </Routes>

        <Footer />

      </div>

    </div>
  );
}

export default App;

