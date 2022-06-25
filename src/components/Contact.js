import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1> </h1>
      <div>
        <div className='contact'>
          <h2> Facing any issues??</h2>
        </div>
        <br />
        <div>
          <h3> Let Us Know</h3>
        </div>
        <br />
        <div>
          <h3>
            Contact Developers <Link to={'/'}>Here</Link>{' '}
          </h3>
        </div>
        <br />
        <div>
          <h3>
            Content Isuess <Link to={'/'}>Here</Link>{' '}
          </h3>
        </div>
        <br />
        <div>
          <h3>
            Or You Can Mail Us <a href='mailto:zubair.shah@islamicuniversity.edu.in'>Here</a>{' '}
          </h3>
        </div>
        <br /> <br />
        <span> We Would Try To resolve Your Query As Soon As Possible. </span>
        <p>Your Patience Is Appreciated</p>
      </div>
    </div>
  );
};

export default Contact;
