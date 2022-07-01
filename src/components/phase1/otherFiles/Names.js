import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../spinner/Spinner';

import './name.css';

const fetchNamesData = () =>
  new Promise((resolve, reject) => {
    fetch('https://api.aladhan.com/asmaAlHusna')
      .then((response) => response.json())
      .then((data) => resolve(data.data))
      .catch((err) => reject(err));
  });

const Names = () => {
  const { isLoading, isError, data, error } = useQuery('namesData', fetchNamesData);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='Names'>
      <h1>Asma ul husna</h1>
      {data?.map((name) => (
        <div key={name.name} className='allahnames'>
          <div className='number'> ({name.number}) </div>
          <div className='arabicc'> {name.name} </div>
          <div className='translations'> {name.transliteration} </div>
          <div className='meaning'> {name.en.meaning} </div>
        </div>
      ))}
    </div>
  );
};

export default Names;
