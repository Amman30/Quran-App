import React, { useState, useEffect } from 'react';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';



const Backtotop = () => {

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
            {backtoTop && (<ArrowCircleUpSharpIcon style={{
                position: "fixed",
                bottom: "50px",
                height: "55px",
                width: "50px",
                fontSize: "50px",
                cursor: "pointer"

            }} onClick={scroll} />

            )}
        </div >
    );
}

export default Backtotop;
