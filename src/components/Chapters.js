import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./chapter.css"
import Spinner from "./Spinner";


const Chapters = () => {

    const [chapters, setChapters] = useState([]);
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://api-scripture-iust-dev.herokuapp.com/v1/scripture/chapterMetaData/all")
            .then(async (response) => {
                setChapters((await response.json()).data)
                setLoading(false)
            });
        // fetch(`https://api.aladhan.com/v1/gToH?`)
        //     .then(async (res) => {
        //         setData((await res.json()).data)
        //         setLoading(false)
        //     })
        fetch(`https://api.aladhan.com/v1/timingsByCity?city=Srinagar&country=india&method=8`)
            .then(async (res) => {
                setData((await res.json()).data)
            })
    }, []);


    return loading ? (<Spinner />) : (
        <div className='chapter'>

            <div className="bis">

                <h1 className='b'>  ﷽ </h1>

                <div className="date">

                    {data.date.hijri.weekday.ar}
                    ({data.date.hijri.day})
                    {data.date.hijri.month.ar},
                    {data.date.hijri.year}   </div>
                <div className='azaan'>
                         <div className='azz'>Azaan Timings Today In Kashmir(IST)</div>
                         <div className='timing'> Fajr <span className='timings'>&nbsp; {data.timings.Fajr}</span></div>
                         <div className='timing'> Dhuhr <span className='timings'>&nbsp;     {data.timings.Dhuhr}</span></div>
                         <div className='timing'> Asr <span className='timings'>&nbsp;    {data.timings.Asr}</span></div>
                         <div className='timing'> Magrib <span className='timings'>&nbsp;  19:19  {data.timings.Magrib}</span></div>
                         <div className='timing'> Isha <span className='timings'>&nbsp;      {data.timings.Isha}</span></div>
                </div>



            </div>




            <div className="chap">

                <div className="topsearchs">
                    Top Search  </div>
                <div className='ele'>
                    <Link className="element" style={{ color: "white" }} to="/67">Al-Mulk</Link>


                    <Link className="element" style={{ color: "white" }} to="/112">Al-Ikhlas</Link>


                    <Link className="element" style={{ color: "white" }} to="/18">Al-Kahf</Link>


                    <Link className="element" style={{ color: "white" }} to="/36">Ya-Sin</Link>
                </div>
                {

                    Object.keys(data).length > 0 ?
                        chapters.map((chapter) => (
                            <div key={chapter.chapter} className='link' >
                                <ol>

                                    <h3>
                                        <div className='box'>
                                            <div className='englishname'><br />({chapter.chapter})&nbsp; <Link style={{ color: "green" }} to={`/${chapter.chapter}`}>{chapter.name} </Link></div>
                                            <div className='nameTranslation'> {chapter.nameTranslation}</div>
                                            <div className='arabicname'>{chapter.arabicName}<br />{chapter.totalVerses}&nbsp;Ayahs</div>
                                        </div>
                                    </h3>
                                </ol>

                            </div>

                        )) : null
                }

            </div>

        </div>

    );
}

export default Chapters;


{/* <div className="container">
                    <div className="row height d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="form"> <i className="fa fa-search"></i> <input type="text" className="form-control form-input" placeholder="Enter Chapter(Surah) No." />  </div>
                        </div>
                    </div>
                </div> */}