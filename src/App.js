import React from 'react';
import './App.css';
// importing files from components
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Chapters from './components/Chapters';
import Verses from './components/Verses';
import Footer from './components/Footer'; // footer component
import About from './components/About';
import Hadith from './components/Hadith';
import Dev from './components/Dev.js';
import Audios from './components/Audios';
import Duas from './components/Duas';
import Names from './components/Names';
import Topbar from './components/Topbar'; // navbar or the topbar
import Error from './components/Error'; // error page for any invalid url entered by user
import Contact from './components/Contact';
import Login from './components/Login';

// query-client is now being used  for fetch call and would replace all fetch call in all the componenets soon

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <div className='route'>
          <Topbar /> {/* universal */}
          <Routes>
            {/* routes */}
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Chapters />} />
            <Route path='/:id' element={<Verses />} />
            <Route path='/About' element={<About />} />
            <Route path='/Hadith' element={<Hadith />} />
            <Route path='/login' element={<Login />} />
            <Route path='/developers' element={<Dev />} />
            <Route path='/audios' element={<Audios />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/duas' element={<Duas />} />
            <Route path='/names' element={<Names />} />
          </Routes>

          <Footer /> {/* universal */}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
