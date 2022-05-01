import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from 'react';
import Chapters from "./components/Chapters";
import Verses from "./components/Verses";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Hadith from "./components/Hadith";
import Dev from "./components/Dev.js"
import Reading from "./components/Reading";
import Search from "./components/Search";



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
          <Route path="/search/:id" element={<Search />} />

        </Routes>

        <Footer />

      </div>

    </div>
  );
}

export default App;

