
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import './Verses.css';
import Backtotop from '../otherFiles/BacktoTop';

const getVersesData = async (chapterId, author) => {
  const response = await fetch(`http://35.154.192.23:5000/v1/scripture/quraan/get?language=en&author=${author}&text=simple&chapter=${chapterId}`);
  return (await response.json())?.data
}

const Verses = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);
  const [showTranslation, setShowTranslation] = useState(true);
  const [title, setTitle] = useState(false);
  const [authors, setAuthors] = useState(["Ahmed Raza", "Ahmed Ali", "daryabadi", "sahih", "qaribullah", "shakir", "hilali", "mubarakpuri", "wahiduddin"]);
  const [enabledAuthors, setEnabledAuthors] = useState([0]);
  const [verseTranslations, setVerseTranslations] = useState({});

  useEffect(async () => {
    setLoading(true);
    const data = await Promise.all(enabledAuthors.map((authorIndex) => {
      return getVersesData(params.id, authors[authorIndex]);
    }));
    setVerseTranslations(() => {
      const newData = {};
      enabledAuthors.forEach((authorIndex, index) => {
        newData[authorIndex] = data[index];
      })
      return newData;
    });
    setLoading(false);
  }, [enabledAuthors, authors, params.id]);

  useEffect(() => {
    fetch(
      `http://35.154.192.23:5000/v1/scripture/chapterMetaData/chapter/${params.id}`,
    )
      .then(async (res) => {
        setChapters((await res.json()).data);
      })
      .catch((err) => {
        console.log('Error occured in first fetch call in Verses component ' + err);
      });
  }, [params.id, navigate]);

  const toggleAuthor = index => {
    if (enabledAuthors.includes(index)) {
      setEnabledAuthors(authors => authors.filter(author => author !== index));
    } else {
      setEnabledAuthors(authors => [...authors, index]);
    }
  }
  return loading ? (
    <Spinner />
  ) : (
    <div className='verses'>
      {authors.map((name, index) =>
        <FormGroup key={name}>
          <FormControlLabel control={<Checkbox checked={enabledAuthors.includes(index)} />} label={name} onChange={() => toggleAuthor(index)} disabled={index === 0} />
        </FormGroup>
      )}
      <div className='button'>
        <button style={{ color: 'black' }} onClick={() => {
          setShowTranslation(!showTranslation);
          setTitle(!title);
        }} type='button' className='btn btn-outline-info'    >
          {`${title ? 'Read With Translation' : 'Read Without Translation'}`}
        </button>
      </div>
      <div>
      </div>
      <div className='surah'>
        <div key={chapters[0]._id}>سورة &nbsp; {chapters[0].arabicName}</div>
      </div>
      {verseTranslations[0][0].chapter !== 9 && <div className='bism'> ﷽ </div>}
      <br />

      {
        verseTranslations[0]?.map((verse, index) => (
          <div key={verse.verse} className='text'>
            {verse.verse}

            {verse.chapter === 1 || verse.chapter === 9 ? (


              < div className='right'> {verse.data.text} </div>


            ) : (


              <div className='right'>
                {verse.verse === 1 ? (<div>

                  {verse.data.text.slice(39)}
                </div>) : (<div>

                  {verse.data.text}
                </div>)}

              </div>

            )}
            {showTranslation ? (
              <>

                {Object.entries(verseTranslations).map(([authorIndex, translation]) => {
                  return <div className='left' key={authors[authorIndex]}>
                    < br />
                    ({verse.verse}) {translation[index].data.translation}
                    <br />

                    <h6> ({authors[authorIndex]})  </h6>
                    <br />
                    <hr className='divider' style={{ height: "100px", width: "1px" }} color='green' />
                  </div>

                })}


              </>
            ) : null}
            <br />
          </div>
        ))
      }
      <Backtotop />

    </div >
  );
};

export default Verses;
