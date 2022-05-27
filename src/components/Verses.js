import React, { useState, useEffect /*useRef*/ } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import Topbar from "./Topbar";

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
      <Topbar />
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
        <div key={chapters[0]._id}>سورة &nbsp; {chapters[0].arabicName}</div>
      </div>
      {versess[0].chapter !== 9 && <div className="bism"> ﷽ </div>}
      <br />

      {versess.map((verse) => (
        <div key={verse.verse} className="text">
          &nbsp;
          {verse.chapter === 1 || verse.chapter === 9 || verse.verse !== 1 ? (
            <div className="right">{verse.data.text} ۝ </div>
          ) : (
            //removing bismillah.. from first verse of every chapter execept chap 1 and
            //        in chap 9 as there is no bismillah in chap 9 itself in the database surah tawbah
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
