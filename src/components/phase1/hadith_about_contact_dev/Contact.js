import React from 'react';
import './contacts.css';
import Button from '@mui/material/Button';


const Contact = () => {

  return (
    <div className='contact'>

      <div className='header1'><h1> We’d love to hear from you</h1></div>
      <div className='header2'>Whether you’re curious about features, a free trial, or even press—we’re ready to answer any and all questions.</div>

      <div className="container">

        <div className="card">
          <h4>Content issues</h4>
          <div className='content'>if user has sported any mistakes in the content, They are requested to report here and we will try to reach out as soon as possible</div>
          <br /> <br />
          <Button variant='contained' color='primary' href='mailto:mail.scripture@gmail.com'>issues</Button>
        </div>

        <div className="card">
          <h4> Bug reports </h4>
          <div className='content'>If your Bug report is effective, then its chances of getting fixed are higher. So fixing a bug depends upon how effectively you report it. please let us know if you are facing any bugs.</div>

          <Button variant='contained' color='primary' href='mailto:mail.scripture@gmail.com'>Bugs</Button>
        </div>
        <div className="card">
          <h4>General enquires</h4>
          <div className='content'>If user wants general inquiries about us, Please feel free to do so. We appreciate your move</div>
          <br /> <br /> <br />

          <Button variant='contained' color='primary' href='mailto:mail.scripture@gmail.com'>enquire</Button>
        </div>

      </div>

    </div>
  );
};

export default Contact;
