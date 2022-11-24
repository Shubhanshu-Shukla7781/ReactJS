import React from 'react';


const link="https://www.cricbuzz.com/";
let Images=()=>{
    return (<div className='container'>
    <a href={link} target="_">
        <img src="https://picsum.photos/id/28/350/350" alt="" />
        <img src="https://picsum.photos/id/8/350/350" alt="" />
        <img src="https://picsum.photos/id/89/350/350" alt="" />
    </a>
    
 </div>)
}

export default Images;