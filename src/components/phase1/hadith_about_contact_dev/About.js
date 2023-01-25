import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <div className='outer'>


        <div className='TEXTABC'>
          <h1>About Us</h1>

          Welcome to our Quran website! Our mission is to provide access to the Quran for all, free of cost, and to make it easy for scholars and students to compare different translations.

          We believe that the Quran is a sacred text that holds immense spiritual and historical significance. It is a source of guidance and inspiration for millions of people around the world, and we want to make it accessible to as many people as possible.

          Our website offers a wide range of translations of the Quran, including classical and modern interpretations. We believe that having access to multiple translations is essential for gaining a deeper understanding of the text, as different translators may interpret certain verses or passages differently.

          Our team is made up of dedicated individuals who are passionate about the Quran and its teachings. We strive to ensure that our website is easy to use and navigate, and that it provides accurate and reliable information.

          We are committed to making our website accessible to all, regardless of location or financial status. That's why we offer all our services for free.
          Thank you for visiting our website and for your support. We hope that you find it to be a valuable resource for studying and understanding the Quran.
          <br />

        </div>

        <div className='privarcy'>
          <h1>Privacy policy</h1>
          We do not serve you ads,so we don't use your personal data to provide
          ads.We don’t gather any personally identifiable
          information. There is no login,There is a location permission that is used
          to get only azan timings in your region
          but its compeletly your choice to provide one. If you deny the location permission
          we have set default to srinagar(Kashmir).Our code
          is open source, so the community can easily inspect and ensure that our stance on privacy is
          being held to its upmost level.
        </div>

      </div>

    </div>







  );
};

export default About;
