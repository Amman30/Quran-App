import React from 'react';

const View = () => {


    function counter_fn() {
        var counter = document.getElementById("cntr");
        var count = 0;
        count = parseInt(counter.innerHTML);
     
        count = count + 1;
        counter.innerHTML = count;
      }
      window.onload = counter_fn;



    return (
        <div>
               <div>
    <p>Total Views Till Now : <span id="cntr">0</span></p>
  </div>
        </div>
    );
}

export default View;
