import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import "./Verses.css"
const Verses = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [verses, setVerses] = useState([])
    const [chapters, setChapters] = useState([])

    useEffect(() => {

        fetch(`https://api-scripture-iust-dev.herokuapp.com/v1/scripture/chapterMetaData/chapter/${params.id}`)
        .then(async (res) => {
            setChapters((await res.json()).data)
            setLoading(false);

        })

        fetch(`https://api-scripture-iust-dev.herokuapp.com/v1/scripture/quraan/get?language=en&author=Ahmed%20Ali&text=simple&chapter=${params.id}`)
            .then(async (res) => {
                setVerses((await res.json()).data)
                setLoading(false);

            })
          

            .catch((error) => {
                console.log(error);
            })
    }, [params.id])

    return loading ? (
        <Spinner />
    ) : (
        <div className="verses">
            <br />
            <div className="bism" > ﷽    </div>
          <div className='surah'>  {
                            chapters.map((chapter)=>(
                                <div>
                                  سورة     &nbsp; {chapter.arabicName}
                                </div>
                            ))
                        }
                        </div>
                        <br />
                     
            {
                
                verses.map((verse) => (
                    <div key={verse.verse} className="text">
                        &nbsp;
                      
                        <div className='right'>   {verse.data.text}۝</div>
                        <div className='left'> ({verse.verse}) {verse.data.translation}  </div>

                        <hr style={{ height: "3px" }} color="black" />
                        <br />
                    </div>
                ))
            }



        </div>
    );
}

export default Verses;
