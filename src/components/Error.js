import React from 'react';
import { Link } from 'react-router-dom';
import Err from './386.gif'
const Error = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <br />
      <img src={Err} />
      <br /> <br />
      <span>You have landed on invalid page </span>
      <br /> <br />
      <span> Back to  <Link to={'/contact'}>Home</Link> </span>
      <br /> <br />
      <h2>OR</h2>
      <br />
      <span>Report a Bug <Link to={'/contact'}>Here</Link></span>


    </div>
  );
};

export default Error;
