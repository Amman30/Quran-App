import React from 'react';

const View = () => {


   const view=document.getElementById("count");

   function updateviews(){
     fetch(`https://api.countapi.xyz/update/amman/reactjs/?amount=1`)
     .then(res=>res.json())
     .then(res=>{
       view.innerHTML=res.value;
     })
   }



    return (
        <div>
<p>This Page Has</p>
<h1 id="count">{view} </h1>
<p>views</p>
        </div>
    );
}

export default View;
