import React from 'react'

let Card=(props)=>{
    console.log(props.img_link);
    return(
        <>
                <div className="card">
                    <h1>{props.name}</h1>
                    <div className="info">
                        <h2>He is a {props.work}</h2>
                    </div>
                    <div className="img">
                        <img src={props.img_link} alt="" />
                    </div>
                    <h1>.....................................
                    ...................................
                    ......................................</h1>
                </div>
            
        </>
    )
}

export default Card;