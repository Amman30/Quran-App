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
        fetch(`https://api.aladhan.com/v1/gToH?`)
            .then(async (res) => {
                setData((await res.json()).data)
                setLoading(false)
            })
    }, []);


    return loading ? (<Spinner />) : (
        <div className='chapter'>
            <div className="bis">

                <h1 className='b'>  ﷽ </h1>
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



                {/* <div className="container">
                    <div className="row height d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="form"> <i className="fa fa-search"></i> <input type="text" className="form-control form-input" placeholder="Enter Chapter(Surah) No." />  </div>
                        </div>
                    </div>
                </div> */}



            </div>
            <div className="topsearchs">
                Top Search  </div>
            <div className='ele'>
                <Link className="element" style={{ color: "white" }} to="/67">Al-Mulk</Link>


                <Link className="element" style={{ color: "white" }} to="/112">Al-Ikhlas</Link>


                <Link className="element" style={{ color: "white" }} to="/18">Al-Kahf</Link>


                <Link className="element" style={{ color: "white" }} to="/36">Ya-Sin</Link>
            </div>

          



            <div className="chap">


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
