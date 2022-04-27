import React, { useState, useEffect } from 'react';
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";
import "./reading.css";
import { Link } from 'react-router-dom';

const Reading = () => {
    const [verses, setVerses] = useState([])
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const [chapters, setChapters] = useState([])


    useEffect(() => {
        fetch(`https://api-scripture-iust-dev.herokuapp.com/v1/scripture/quraan/get?language=en&author=Ahmed%20Ali&text=simple&chapter=${params.id}`)
            .then(async (res) => {
                setVerses((await res.json()).data)
                setLoading(false);

            })
        fetch(`https://api-scripture-iust-dev.herokuapp.com/v1/scripture/chapterMetaData/chapter/${params.id}`)
            .then(async (res) => {
                setChapters((await res.json()).data)
                setLoading(false);

            })
            .catch((error) => {
                console.log(error);
            })
    }, [params.id])



    return loading ? (
        <Spinner />
    ) : (
        <div className="reading">
            <div className='reads'>  <Link style={{ color: "green" }} to={`/${params.id}`}>Read With Translation</Link></div>
            <div className='sura'>  {

                chapters.map((chapter) => (

                    <div key={chapter._id} >

                        سورة     &nbsp; {chapter.arabicName}
                    </div>
                ))
            }

            </div>

            {

                verses.map((verse) => (
                    <div key={verse.verse} className="tex">


                        <div className='righ'>  {verse.data.text}۝</div>


                    </div>
                ))

            }

        </div>

    );

}

export default Reading;
