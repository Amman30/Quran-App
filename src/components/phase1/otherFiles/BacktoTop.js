import React, { useState, useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

const Backtotop = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [backtoTop, setBacktoTop] = useState(false);




    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                setBacktoTop(true)
            }
            else {
                setBacktoTop(false);
            }
        })





    }, [])

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    return (
        <div>
            {backtoTop && (<button style={{
                position: "fixed",
                bottom: "50px",
                height: "55px",
                width: "50px",
                fontSize: "50px"

            }} onClick={scroll}>
                ^
            </button>)}


            {/* --------- */}



        </div >
    );
}

export default Backtotop;
