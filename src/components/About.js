import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <span className='text'>
        <h1>About us</h1>
        The Arabic Quran is considered by Muslims to be verbatim word of God. It has been made
        accessible to non-Arabic speakers through translations. Since English has turned up to be
        the dominant academic and communication language in the current times, we at department of
        Computer Science and Engineering, Islamic University of Science and Technology, Kashmir
        intend to make available a large number of English translations of the Quran to people the
        world over. We also intend to focus on local languages of Jammu & Kashmir and bring
        translations in these languages to the fore.
      </span>
      <hr color='white' />
      <h2>Credits</h2>
      <span className='text'>
        <ul>
          This project wouldn't have been possible without the open source libraries and projects
          we've used:
          <li># Hadith API Documentation</li>
        </ul>
      </span>
      <hr color='white' />
      <h2>Privacy policy</h2>
      <span className='privacy'>
        We do not serve you ads, so we do not need to track you or use your personal data to provide
        you with better ads to increase our revenues. We don’t gather any personally identifiable
        information. There is no login, there is also no request for location permissions Our code
        is open source, so the community can easily inspect and ensure that our stance on privacy is
        being held to its upmost level.
      </span>
    </div>
  );
};

export default About;
