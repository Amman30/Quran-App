import React,{useState,useEffect} from 'react';
import Spinner from "./Spinner";
import "./name.css";

const Names = () => {
    const[names,setNames]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch(`http://api.aladhan.com/asmaAlHusna`)
        .then(async (res)=>{
            setNames((await res.json()).data)
            setLoading(false);
        })
    })


 



    return loading ? (<Spinner />) :  (
        <div className='Names'>
            <h1 >Asma ul husna</h1>
            {
                names.map((name)=>(
                 <div key={name.name} className='allahnames'>    
                       <div className='number'> ({name.number}) </div>
                       <div className='arabicc'>  {name.name}  </div> 
                     <div className='translations'>   {name.transliteration}      </div> 
                <div className='meaning'>    {name.en.meaning}  </div>
       
                    </div>
                ))
            }
        </div>
    );
}

export default Names;
