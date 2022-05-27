import React, { useState, useEffect /*useRef*/ } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

import "./Verses.css";

const Verses = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [versess, setVersess] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [showTranslation, setShowTranslation] = useState(true);
  const [title, setTitle] = useState(false);

  useEffect(() => {
    fetch(
      `https://api-scripture-iust-dev.herokuapp.com/v1/scripture/chapterMetaData/chapter/${params.id}`
    ).then(async (res) => {
      setChapters((await res.json()).data);
    });

    fetch(
      `https://api-scripture-iust-dev.herokuapp.com/v1/scripture/quraan/get?language=en&author=Ahmed%20Ali&text=simple&chapter=${params.id}`
    )
      .then(async (res) => {
        setVersess((await res.json()).data);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);
   
  return loading ? (
    <Spinner />
  ) : (
    <div className="verses">
      <div className="reading">
        <button
          style={{ color: "white" }}
          onClick={() => {
            setShowTranslation(!showTranslation);
            setTitle(!title);
          }}
          type="button"
          className="btn btn-outline-info"
        >
          {`${title ? "Read With Translation" : "Read Without Translation"}`}
        </button>
      </div>
      <div className="surah">
        {chapters.map((chapter) => (
          <div key={chapter._id}>سورة &nbsp; {chapter.arabicName}</div>
        ))}
      </div>
      {chapters[0].chapter!==9&&<div className="bism"> ﷽ </div>}
      

      <br />

      {versess.map((verse) => (
        <div key={verse.verse} className="text">
          &nbsp;
          {chapters[0].chapter == 1 || verse.verse !== 1 ? (
            <div className="right">{verse.data.text} ۝ </div>
          ) : (
            <div className="right">{verse.data.text.slice(39)} ۝ </div>
          )}
          {showTranslation ? (
            <>
              <div className="left">
                ({verse.verse}). {verse.data.translation}
              </div>
              <hr style={{ height: "3px" }} color="black" />
            </>
          ) : null}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Verses;
