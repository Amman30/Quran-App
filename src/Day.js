import React,{useState,useEffect} from 'react';

const Day = () => {
    const[results,setresults]=useState({});

    useEffect(()=>{
        fetch("https://api.sunrise-sunset.org/json?lat=33.2778&lng=75.3412")
        .then( async (res)=>{
            setresults((await res.json()).results)
        })
        .catch((error)=>{
            console.log(error);
        })
    })
    return (
        <div>
            {results.day_length}
        </div>
    );
}

export default Day;
