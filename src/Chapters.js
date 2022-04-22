import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./chapter.css"


const Chapters = () => {

    const [chapters, setChapters] = useState([]);
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("https://api.quran.com/api/v4/chapters?language=en")
            .then(async (response) => {
                setChapters((await response.json()).chapters)
            });
        fetch(`https://api.aladhan.com/v1/gToH?`)
            .then(async (res) => {
                setData((await res.json()).data)
            })
    }, []);


    return (
        <div className='chapter'>
            <div className="bis">
<h1 >  ﷽ </h1> <br />
                {
                    Object.keys(data).length > 0 ?
                        <h3 className="bismillah">

                            {data.hijri.weekday.ar}
                            ({data.hijri.day})

                            {data.hijri.month.ar} ,

                            {data.hijri.year}
                        </h3>
                        : null
                }

                
            </div>
            <h2>
                <br /> 
                TRANSLATIONS BELOW
            </h2>
            <div className="chap">
                {
                    chapters.map((chapter) => (
                        <div className='link' key={chapter.id}>
                            <ol>

                                <h3>
                                    <br />{chapter.id}&nbsp;
                                    <Link to={`/${chapter.id}`}>{chapter.name_simple} </Link>
                                </h3>
                            </ol>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Chapters;
