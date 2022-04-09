import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";

import "./Verses.css"
const Verses = () => {

    const params=useParams();

    const[verses,setVerses]=useState([])



useEffect(()=>{
   
    fetch(`https://api.quran.com/api/v4/verses/by_chapter/${params.id}?language=ur&words=true&page=1&per_page=300`)
    .then(async(res)=>{
        setVerses((await res.json()).verses)
       
    })
},[])



    return (
        <div className='verses'>
     
            {
                verses.map((verse)=>(
               
                    <div className="text">
                           
                        {verse.words.map((word)=>(
                            
                            <span className="text">
                           

                               {word.translation.text} &nbsp;
                       
                            </span>
                            
                        
                        ))}
<br />
                    </div>
                ))
            }
        </div>
    );
}

export default Verses;
