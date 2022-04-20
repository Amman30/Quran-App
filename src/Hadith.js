import React, { useState, useEffect } from 'react';
import "./hadith.css";
import Spinner from "./Spinner";
const Hadith = () => {
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://ahadith-api.herokuapp.com/api/ahadith/all/en`)
            .then(async (res) => {

                setChapters((await res.json()).AllChapters)
setLoading(false)
            })
    })

    return loading ? (
        <Spinner />
    ) : (
        <div className="hddd">
            {
                chapters.map((chap) => (
                    <div className="had">
                        <span>
                            ({chap.Hadith_ID})&nbsp;
                             {chap.En_Text}
                             <br />
                        </span>
                    </div>
                ))
            }
        </div>
    );
}

export default Hadith;
