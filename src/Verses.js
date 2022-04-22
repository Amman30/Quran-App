import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import "./Verses.css"
const Verses = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [verses, setVerses] = useState([])
    useEffect(() => {

        fetch(`https://api.quran.com/api/v4/verses/by_chapter/${params.id}?language=en&words=true&page=1&per_page=300`)
            .then(async (res) => {
                setVerses((await res.json()).verses)
                setLoading(false);

            })
            .catch((error)=>{
                console.log(error);
            })
    }, [params.id])

    return loading ? (
        <Spinner />
    ) : (
        <div className="verses">
            <br />
                <div className="bism" > ﷽ </div> 
            {
                verses.map((verse) => (
                    <div className="text">
                        
                        ({verse.verse_key}) &nbsp;

                        {verse.words.map((word) => (
                            <span className="text">
                                {word.translation.text} &nbsp;
                            </span>
                        ))}
                        <br />
                    </div>
                ))
            }
   
        </div>
    );
}

export default Verses;
