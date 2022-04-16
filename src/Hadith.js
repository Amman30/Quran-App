import React, { useState, useEffect } from 'react';
import "./hadith.css";

const Hadith = () => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        fetch(`https://ahadith-api.herokuapp.com/api/ahadith/all/en`)
            .then(async (res) => {

                setChapters((await res.json()).AllChapters)

            })
    })

    return (
        <div>
            {
                chapters.map((chap) => (
                    <div className="had">
                        <span>
                            ({chap.Hadith_ID})
                            {chap.En_Text}
                        </span>
                    </div>
                ))
            }
        </div>
    );
}

export default Hadith;
