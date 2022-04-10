import React, { useState, useEffect } from 'react';
import "./chapter.css"
import Day from "./Day.js";

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
    
               
                {
                    Object.keys(data).length > 0 ?
                    <h3 className="date">
                     
                        {data.hijri.weekday.ar} 
                        ({data.hijri.day})
                       
                        {data.hijri.month.ar} ,
                       
                   {data.hijri.year}
                  
                     
                    </h3>
                    : null
                }
                <br /> <br />  
                <h1 className='bismillah'>
                    ﷽
                </h1>
   

            </div>
            <h2>
            <div className="day">
HOURS YOU HAVE TO FAST TODAY:&nbsp;<Day />
</div>
    
                <br /> <br />
                TRANSLATIONS BELOW
            </h2>
            <div className="chap">
                {
                    chapters.map((chapter) => (
                        <div className='link'>
                            <ol key={chapter.id}>
                            
                                <h3>
                                    <br />{chapter.id}&nbsp;
                                    <a href={`/${chapter.id}`}>  {chapter.name_simple}  </a>
                                </h3>
                            </ol>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Chapters;


