import React, { useState, useEffect } from 'react';
import './hadith.css';
import Spinner from '../spinner/Spinner';
import Backtotop from '../otherFiles/BacktoTop';
const Hadith = () => {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ahadith-api.herokuapp.com/api/ahadith/all/en').then(async (res) => {
      setChapters((await res.json()).AllChapters);
      setLoading(false);
    });
  });
  return loading ? (
    <Spinner />
  ) : (
    <div className='hddd'>
      <br />
      {chapters.map((chap) => (
        <div key={chap.Hadith_ID} className='had'>
          <span>
            ({chap.Hadith_ID})&nbsp;
            {chap.En_Text}
            <hr color='black' />
          </span>
        </div>
      ))}
      <div className='BacktoTop'>
        <Backtotop />
      </div>
    </div>
  );
};

export default Hadith;
