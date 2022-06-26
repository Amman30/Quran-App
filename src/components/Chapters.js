import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import './chapter.css';

import Spinner from './Spinner';
const Todaydate = Math.floor(new Date().getTime() / 1000.0);

const getData = (coords, resolve, reject) => {
  const { latitude, longitude } = coords;
  Promise.all([
    fetch(
      `https://api.aladhan.com/v1/timings/${Todaydate}?latitude=${latitude}&longitude=${longitude}&method=9`,
    ),
    fetch('https://api-scripture-iust-dev.herokuapp.com/v1/scripture/chapterMetaData/all'),
  ])
    .then(([timingsResponse, chaptersResponse]) => {
      return Promise.all([timingsResponse.json(), chaptersResponse.json()]);
    })
    .then(([timings, chapters]) => {
      resolve({ timings, chapters });
    })
    .catch((err) => {
      reject(err);
      console.log('Error Occured in fetchChapterData');
    });
};

const fetchChaptersData = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => getData(position.coords, resolve, reject),
      (_) =>
        getData({ latitude: 34.08389040473574, longitude: 74.79815206818213 }, resolve, reject),
    );
  });
};

const Chapters = () => {
  const navigate = useNavigate();
  const { isLoading, isError, data, error } = useQuery('chaptersData', fetchChaptersData);

  const [keyword, setKeyword] = useState('');

  const Search = (e) => {
    if (keyword) {
      e.preventDefault();
      navigate(`${keyword}`);
    } else console.log('error');
  };

  const chapters = data?.chapters.data;
  const timings = data?.timings.data;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='chapter'>
      <div className='bis'>
        <h1 className='b'> ﷽ </h1>

        <div className='date'>
          {timings.date.hijri.weekday.ar}({timings.date.hijri.day}){timings.date.hijri.month.ar},
          {timings.date.hijri.year}
        </div>
        <div className='azaan'>
          <div className='azz'>Azaan Timings Today In Your Region(Local Time)</div>
          <div className='timing'>
            {' '}
            Fajr <span className='timings'>&nbsp; {timings.timings.Fajr}</span>
          </div>
          <div className='timing'>
            Dhuhr <span className='timings'>&nbsp; {timings.timings.Dhuhr}</span>
          </div>
          <div className='timing'>
            Asr <span className='timings'>&nbsp; {timings.timings.Asr}</span>
          </div>
          <div className='timing'>
            Magrib <span className='timings'>&nbsp;{timings.timings.Maghrib}</span>
          </div>
          <div className='timing'>
            Isha <span className='timings'>&nbsp; {timings.timings.Isha}</span>
          </div>
        </div>
      </div>
      <div className='chap'>
        <form onSubmit={Search}>
          <div className='input-group'>
            <div className='form-outline'>
              <input
                id='search-input'
                placeholder='Enter Surah Number'
                type='number'
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                className='form-control search'
              />
            </div>
            <button id='search-button' type='submit' className='btn btn-primary search1'>
              <i className='fas fa-search'></i>
            </button>
          </div>
        </form>
        <div className='topsearchs'>Top Search </div>
        <div className='ele'>
          <Link className='element' style={{ color: 'white' }} to='/67'>
            Al-Mulk
          </Link>
          <Link className='element' style={{ color: 'white' }} to='/112'>
            Al-Ikhlas
          </Link>
          <Link className='element' style={{ color: 'white' }} to='/18'>
            Al-Kahf
          </Link>
          <Link className='element' style={{ color: 'white' }} to='/36'>
            Ya-Sin
          </Link>
        </div>
        {Object.keys(data).length > 0
          ? chapters.map((chapter) => (
              <div key={chapter.chapter} className='link'>
                <ol>
                  <h3>
                    <div className='box'>
                      <Link style={{ color: '#066163' }} to={`/${chapter.chapter}`}>
                        <div className='englishname'>
                          <br />({chapter.chapter}
                          )&nbsp;{chapter.name}
                        </div>
                        <div className='nameTranslation'> {chapter.nameTranslation}</div>
                        <div className='arabicname'>
                          {chapter.arabicName}
                          <br />
                          {chapter.totalVerses}
                          &nbsp;Ayahs
                        </div>
                      </Link>
                    </div>
                  </h3>
                </ol>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Chapters;
