import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

import "./Verses.css";


const Verses = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [versess, setVersess] = useState([]);
    const [chapters, setChapters] = useState([]);
    // const audioRefs = useRef({});
    // const [versesWithAudio, setVersesWithAudio] = useState([]);
    const [showTranslation, setShowTranslation] = useState(true);
    const [title, setTitle] = useState(false);

    useEffect(() => {
        fetch(
            `https://api-scripture-iust-dev.herokuapp.com/v1/scripture/chapterMetaData/chapter/${params.id}`
        ).then(async (res) => {
            setChapters((await res.json()).data);
            setLoading(false);
        });

        fetch(
            `https://api-scripture-iust-dev.herokuapp.com/v1/scripture/quraan/get?language=en&author=Ahmed%20Ali&text=simple&chapter=${params.id}`
        )
            .then(async (res) => {
                setVersess((await res.json()).data);
                setLoading(false);
            })

            // fetch(`https://api.quran.sutanlab.id/surah/${params.id}`).then(
            //     async (res) => {
            //         setVersesWithAudio((await res.json()).data.verses);
            //         setLoading(false);
            //     }
            // )
            .catch((error) => {
                console.log(error);
            });
    }, [params.id]);

    // const playNextAudio = (currentIndex) => {
    //     if (currentIndex < versesWithAudio.length - 1) {
    //         audioRefs.current[currentIndex + 1].play();
    //     }
    // };


    // const pauseAllExcept = (currentIndex) => {
    //     Object.keys(audioRefs.current).forEach((key) => {
    //         if (parseInt(key) !== currentIndex) {
    //             audioRefs.current[key].pause();
    //         }
    //     });
    // };

  



    return loading ? (
        <Spinner />
    ) : (
        <div className="verses">

            <div className="reading">
                <button
                    style={{ color: "white" }}
                    onClick={() => { setShowTranslation(!showTranslation);setTitle(!title) ; }}
                    type="button"
                    className="btn btn-outline-info"
                >
                    {`${title?"Read With Translation":"Read Without Translation"}`}
              
                </button>
            </div>
            <div className="bism"> ﷽ </div>
            <div className="surah">

                {chapters.map((chapter) => (
                    <div key={chapter._id}>
                        سورة &nbsp; {chapter.arabicName}
                    </div>
                ))}
            </div>
            <br />
      
            {versess.map((verse) => (
                <div key={verse.verse} className="text">

                    &nbsp;
                    <div className="right"> {verse.data.text} ۝ </div>
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












{/* <div key={versess.inQuran} className="audios">
                        <audio
                            controls
                            ref={(e) => (audioRefs.current[verse.verse] = e)}
                            onPlay={() => pauseAllExcept(verse.verse)}
                            onEnded={() => playNextAudio(verse.verse)}
                        >
                            <source
                                src={
                                    versesWithAudio.find(
                                        (v) => v.number.inSurah === verse.verse
                                    ).audio.primary
                                }
                                type="audio/mp3"
                            />
                        </audio>
                    </div> */}