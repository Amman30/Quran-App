import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1> </h1>
      <div>
        <div className='contact'>   <h2> Facing any issue?</h2>   </div>  <br />
        <div><h3> Let Us Know</h3> </div>
        <br /><div> <h3> Contact Developers <Link to={'/'}>Here</Link></h3>
        </div> <br />
        <div>
          <h3> Content Isuess <Link to={'/'}>Here</Link></h3>
        </div>
        <br />
        <div>
          <p>If Azan Timing are not correct then by default Region
            is set to Srinagar(Kashmir).</p> <p>In that case please allow location access and try loading again. If the problem still continues, please mail us the same.  </p>
          <h3>
            You Can Mail Us <a href='mailto:zubair.shah@islamicuniversity.edu.in'>Here</a>{' '}
          </h3>
        </div>
        <br /> <br />
        <span> We Would Try To resolve Your Query As Soon As Possible. </span>
        <br />
        <p>Your Patience Is Appreciated</p>

      </div>
    </div>
  );
};

export default Contact;
