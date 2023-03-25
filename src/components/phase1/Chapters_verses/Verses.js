
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import './Verses.css';
import Backtotop from '../otherFiles/BacktoTop';
import ArrowCircleLeftSharpIcon from '@mui/icons-material/ArrowCircleLeftSharp';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';





const Verses = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState({});
  const [showTranslation, setShowTranslation] = useState(true);
  const [title, setTitle] = useState(false);
  const [Translationtitle, setTranslationTitle] = useState(false);
  const [authors, setAuthors] = useState(["Ahmed Ali", "Ahmed Raza", "daryabadi", "sahih", "qaribullah", "shakir", "hilali", "mubarakpuri", "wahiduddin"]);
  const [enabledAuthors, setEnabledAuthors] = useState([0]);
  const [verseTranslations, setVerseTranslations] = useState({});
  const [showAvailableTranslations, setShowAvailableTranslations] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const getVersesData = async (chapterId, author) => {

    if (chapterId >= 1 && chapterId <= 114) {
      const response = await fetch(`https://api.illustriousquran.com//v1/scripture/quraan/get?language=en&author=${author}&text=simple&chapter=${chapterId}`);
      return (await response.json())?.data
    }
    else {
      navigate("*")
    }
  }

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
      `https://api.illustriousquran.com/v1/scripture/chapterMetaData/chapter/${params.id}`,
    )
      .then(async (res) => {
        setChapters((await res.json()).data)
      })
      .catch((err) => {
        console.log('Error occured in first fetch call in Verses component ' + err);

      });

  }, [params.id, navigate]);


  useEffect(() => {

    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setShowButtons(true)
      }
      else {
        setShowButtons(false);
      }
    })

  }, [])


  const toggleAuthor = index => {
    if (enabledAuthors.includes(index)) {
      setEnabledAuthors(authors => authors.filter(author => author !== index));
    } else {
      setEnabledAuthors(authors => [...authors, index]);
    }
  }
  const disableButton = () => {

    setDisabled(prevDisabled => !prevDisabled);

  }

  const perviousPageButton = () => {
    if (params.id > 1 && params.id <= 113) {
      navigate(`/${--(params.id)}`)
    }
    else {
      setShowButtons(prevDisabled => !prevDisabled)
    }

  }

  const NextPageButton = () => {
    if (params.id >= 1 && params.id <= 113) {
      navigate(`/${++(params.id)}`)
    }
    else {
      setShowButtons(prevDisabled => !prevDisabled)
    }

  }



  return loading ? (
    <Spinner />
  ) : (
    <div className='verses'>
      <div className='button'>
        <div className="ToggleButton" >
          <button disabled={disabled} style={{ color: 'black' }} onClick={() => {
            setShowAvailableTranslations(!showAvailableTranslations);
            setTranslationTitle(!Translationtitle);

          }} type='button' className='btn btn-outline-info'    >
            {`${Translationtitle ? 'Close Available Translations' : 'Show Available translations'}`}
          </button>
          {authors.map((name, index) =>
            showAvailableTranslations ?
              null : <FormGroup key={name}>
                <FormControlLabel control={<Checkbox checked={enabledAuthors.includes(index)} />} label={name} onChange={() => toggleAuthor(index)} disabled={index === 0} />
              </FormGroup>
          )}
        </div>

        <button style={{ color: 'black' }} onClick={() => {
          setShowTranslation(!showTranslation);
          disableButton();
          setTitle(!title);
        }} type='button' className='btn btn-outline-info'    >
          {`${title ? 'Read With Translation' : 'Read Without Translation'}`}
        </button>
      </div>
      <div>
      </div>
      <div className='surah'>

        <div key={verseTranslations[0][0]._id}>سورة &nbsp; {chapters[0].arabicName}</div>

      </div>
      {
        verseTranslations[0][0].chapter !== 9 && verseTranslations[0][0].chapter !== 1 ? (<div className='bism'> ﷽ </div>) : null
      }
      <br />

      {showButtons && (<ArrowCircleLeftSharpIcon className='Lbutton' style={{
        position: "fixed",
        bottom: "50px",
        height: "55px",
        width: "85px",
        left: "630px",
        fontSize: "15px",
        cursor: "pointer"

      }} onClick={() => {
        perviousPageButton()


      }} />)}



      {showButtons && (<ArrowCircleRightSharpIcon className='Rbutton' style={{
        position: "fixed",
        bottom: "50px",
        right: "580px",
        height: "55px",
        width: "85px",
        fontSize: "15px",
        cursor: "pointer"

      }} onClick={() => {
        NextPageButton()
      }

      } />)
      }

      {
        verseTranslations[0]?.map((verse, index) => (
          <div key={verse.verse} className='text'>


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

                  </div>

                })}
                <hr className='divider' style={{ height: "200px", width: "1px" }} color='green' />

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