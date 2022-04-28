import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./chapter.css"
import Spinner from "./Spinner";


const Chapters = () => {

    const [chapters, setChapters] = useState([]);
    const [data, setData] = useState({})
    const[loading,setLoading]=useState(true)

    useEffect(() => {
        fetch("https://api-scripture-iust-dev.herokuapp.com/v1/scripture/chapterMetaData/all")
            .then(async (response) => {
                setChapters((await response.json()).data)
                setLoading(false)
            });
        fetch(`https://api.aladhan.com/v1/gToH?`)
            .then(async (res) => {
                setData((await res.json()).data)
                setLoading(false)
            })
    }, []);


    return loading?( <Spinner />):(
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
     
                WHAT DO YOU WANT TO READ TODAY
            </h2>
            <div className="chap">
                {
                     Object.keys(data).length > 0 ?
                    chapters.map((chapter) => (
                        <div key={chapter.chapter} className='link' >
                            <ol>

                                <h3>
                                    <div className='box'>
                                   <div className='englishname'><br />({chapter.chapter})&nbsp; <Link style={{color:"green"}}  to={`/${chapter.chapter}`}>{chapter.name} </Link></div>
                                    <div className='nameTranslation'> {chapter.nameTranslation}</div>
                                    <div className='arabicname'>{chapter.arabicName}<br />{chapter.totalVerses}&nbsp;Ayahs</div>
                                    </div>
                                </h3>
                            </ol>
                        </div>
                       
                    ))   : null
                }
            </div>
       
        </div>
    );
}

export default Chapters;
