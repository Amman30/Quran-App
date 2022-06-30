import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import './Verses.css';

const Verses = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [versess, setVersess] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [showTranslation, setShowTranslation] = useState(true);
  const [title, setTitle] = useState(false);

  useEffect(() => {
    fetch(
      `https://api-scripture-iust-dev.herokuapp.com/v1/scripture/chapterMetaData/chapter/${params.id}`,
    )
      .then(async (res) => {
        setChapters((await res.json()).data);
      })
      .catch((err) => {
        console.log('Error occured in first fetch call in Verses component ' + err);
      });

    fetch(
      `https://api-scripture-iust-dev.herokuapp.com/v1/scripture/quraan/get?language=en&author=Ahmed%20Ali&text=simple&chapter=${params.id}`,
    )
      .then(async (res) => {
        setVersess((await res.json()).data);
        setLoading(false);
      })
      .catch((error) => {
        navigate('*');
        window.location.reload(true);
        console.log('Error Occured In Verses Component second Fetch Call ' + error);
      });
  }, [params.id, navigate]);

  return loading ? (
    <Spinner />
  ) : (
    <div className='verses'>
      <div className='reading'>
        <button style={{ color: 'white' }} onClick={() => {
          setShowTranslation(!showTranslation);
          setTitle(!title);
        }} type='button' className='btn btn-outline-info'   >
          {`${title ? 'Read With Translation' : 'Read Without Translation'}`}
        </button>
      </div>
      <div className='surah'>
        <div key={chapters[0]._id}>سورة &nbsp; {chapters[0].arabicName}</div>
      </div>
      {versess[0].chapter !== 9 && <div className='bism'> ﷽ </div>}
      <br />

      {versess.map((verse) => (
        <div key={verse.verse} className='text'>
          &nbsp;
          {verse.chapter === 1 || verse.chapter === 9 || verse.verse !== 1 ? (
            <div className='right'>{verse.data.text} ۝ </div>
          ) : (
            <div className='right'>{verse.data.text.slice(39)} ۝ </div>
          )}
          {showTranslation ? (
            <>
              sfgjhsf
              <div className='left'>
                ({verse.verse}). {verse.data.translation}
              </div>
              <hr style={{ height: '3px' }} color='black' />
            </>
          ) : null}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Verses;
