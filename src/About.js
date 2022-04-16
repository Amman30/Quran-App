import React from 'react';
import "./about.css";


const About = () => {

    return (
        <div className="about">
        
           <p>
               <h1>About us</h1>
           The Arabic Quran is considered by Muslims to be verbatim word of God.
            It has been made accessible to non-Arabic speakers through translations.
             Since English has turned up to be the dominant academic and
              communication language in the current times, we at department of Computer Science and Engineering,
               Islamic University of Science and Technology, Kashmir intend to make available a large number of English translations
                of the Quran to people the world over. 
           We also intend to focus on local languages of Jammu & Kashmir and bring  translations in these languages to the fore.
           </p>
           <hr color="red"/>
           <h2 >Credits</h2>
           <span >
        
               <ul>
           This project wouldn't have been possible without the many open source libraries and projects we've used:
           <li>
               Quran.com
               
           </li>
           <li>
            Al Quran
               
           </li>
           <li>
           Hadith API Documentation
           </li>
           </ul>
           </span>
           <hr color="red"/>
           <h2>
           Privacy policy
           </h2>
           <p>
           This project is run by a set of Muslims who do this work for the sake of Allah and Prophet Mohammad(Saw).
            We do not serve you ads, so we do not need to track you or use your personal data to provide
             you with better ads to increase our revenues. We don’t gather any personally identifiable information. 
             There is no login, there is also no request for location permissions (except optionally
            on the home page for the purposes of computing more accurate Salah timings).
Our code is open source, so the community can easily inspect and ensure that our stance on privacy is being held to its upmost level.
           </p>
        </div>
    );
}

export default About;
