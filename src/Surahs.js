import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

import "./surahs.css";

const Surahs = () => {
    const [surahs, setSurahs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.alquran.cloud/v1/quran/quran-uthmani#`).then(
            async (res) => {
                setSurahs((await res.json()).data.surahs);
                setLoading(false);
            }
        );
    }, []);
    return loading ? (
        <Spinner />
    ) : (
        <div className="surahs">
            <br /> 
            {surahs.map((surah) => (
                <div key={surah.number}>
                    {surah.ayahs.map((ayah) => (
                        <div key={ayah.numberInSurah}>
                            <h3> ۞{ayah.text} </h3>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Surahs;
