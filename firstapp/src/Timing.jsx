import React from 'react';

let time=()=>{
    return new Date().toLocaleTimeString()
 }
let Timing=()=>{
    return(<h1 className='currentTime'>The current time is {time()}</h1>);
}

export default Timing;