
import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";

const Search = () => {
    const params = useParams();
    const[searchs,setSearch]=useState([]);

    useEffect(()=>{
fetch(`https://api-scripture-iust-dev.herokuapp.com/v1/scripture/quraan/search/${params.id}`)
.then(async (res)=>{
    setSearch((await res.json()).data)
})
    },[params.id])
    return (
        <div>
            {
                searchs.map((search)=>(
                    <div key={search.id}>
                        {search.text.uthmani}
                    </div>
                ))
            }
        </div>
    );
}

export default Search;
