import React from 'react'; // {''}
import './App.css'; // {''}
// importing files from components
import Privateroute from './components/phase2/Privateroute/PrivateR';
import { Routes, Route } from 'react-router-dom'; // {''}
import { QueryClient, QueryClientProvider } from 'react-query' // {''};
import Chapters from './components/phase1/Chapters_verses/Chapters';
import Verses from './components/phase1/Chapters_verses/Verses';
import Footer from './components/phase1/Topbar_footer/Footer'; // footer component
import About from './components//phase1/hadith_about_contact_dev/About';
import Hadith from './components/phase1/hadith_about_contact_dev/Hadith';
import Dev from './components/phase1/hadith_about_contact_dev/Dev';
import Audios from './components/phase1/hadith_about_contact_dev/Audios';
import Duas from './components/phase1/otherFiles/Duas';
import Names from './components/phase1/otherFiles/Names';
import Topbar from './components/phase1/Topbar_footer/Topbar'; // navbar or the topbar
import Error from './components/phase1/otherFiles/Error'; // error page for any invalid url entered by user
import Contact from './components/phase1/hadith_about_contact_dev/Contact';
import Login from './components/phase2/login_logout/Login';
import Signup from './components/phase2/login_logout/Signup';
import Adminlogin from './components/phase2/login_logout/Adminlogin';



// query-client is now being used  for fetch call and would replace all fetch call in all the componenets soon

const queryClient = new QueryClient(); // {''}

function App() { // {''}
  return (   // {''}
    <QueryClientProvider client={queryClient}> {''}
      <div className='app'>{''}
        <div className='route'>{''}
          <Topbar /> {/* universal */}{''}
          <Routes>{''}
            {/* routes */}
            <Route path='*' element={<Error />} />{''}
            <Route path='/' element={<Chapters />} />{''}
            <Route path='/:id' element={<Verses />} />{''}
            <Route path='/About' element={<About />} />{''}
            <Route path='/Hadith' element={<Hadith />} />{''}
            <Route path='/developers' element={<Dev />} />{''}
            {/* <Route path="/adminlogin" element={<Adminlogin />} />{''} */}
            <Route path='/audios' element={<Audios />} />{''}
            <Route path='/contact' element={<Contact />} />{''}
            <Route path='/duas' element={<Duas />} />{''}
            <Route path='/names' element={<Names />} />{''}
            {/* <Route path='/login' element={<Login />} />{''}
            <Route path='/signup' element={<Signup />} />{''} */}


          </Routes>
          {/* <Privateroute > */}

          {/* </Privateroute> */}


          <Footer /> {/* universal */}{''}
        </div>{''}
      </div>{''}
    </QueryClientProvider> // { '' }
  );
}

export default App;  
