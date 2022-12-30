import React from 'react';
import Data from './Data';
import Card from './Card';

let App = () => {
    return (
        <>

            <h1>BEST INDIAN CRICKETERS</h1>
            <div>
                {/*  <Card
        name={Data[0].name}
        img_link={Data[0].img_link} 
        work={Data[0].work}
        ></Card>
        <Card
        name={Data[1].name}
        img_link={Data[1].img_link} 
        work={Data[1].work}
        ></Card>
        <Card
        name={Data[2].name}
        img_link={Data[2].img_link} 
        work={Data[2].work}
        ></Card>
        <Card
        name={Data[3].name}
        img_link={Data[3].img_link} 
        work={Data[3].work}
        ></Card>
        <Card
        name={Data[4].name}
        img_link={Data[4].img_link} 
        work={Data[4].work}
        ></Card>  */}



                {
                    Data.map((data) => {
                        return (
                            <Card
                                name={data.name}
                                img_link={data.img_link}
                                work={data.work}>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}
export default App;