import React, { useEffect, useState } from "react";
import Header from "./Header";

// class App extends React.Component {
//   constructor()
//   {
//     super()
//     this.state = {
//       voteParty: [
//         { name: "Javascript", vote: 0 },
//         { name: "Python", vote: 0 },
//         { name: "Java", vote: 0 },
//         { name: "C++", vote: 0 },
//         { name: "Kotlin", vote: 0 },
//       ]
//     }
//   }

//   //resetState function is used to setState to initial state from where this game started
//   resetState(){
//     this.setState({
//       voteParty: [
//         { name: "Javascript", vote: 0 },
//         { name: "Python", vote: 0 },
//         { name: "Java", vote: 0 },
//         { name: "C++", vote: 0 },
//         { name: "Kotlin", vote: 0 },
//       ]
//     })
//   }
//   // componentDidMount for getting the stored values from the local storage
//   componentDidMount() {
//     if (window.localStorage.getItem('votedetails')) {
//       this.setState({
//         voteParty: JSON.parse(window.localStorage.getItem('votedetails'))
//       })
//     }
//   }
//   // componentDidUpdate for storing the current state values into the local storage
//   componentDidUpdate( prevState) {
//     console.log("prevState",this.state.voteParty);
//     if(this.state.voteParty !== prevState){
//       window.localStorage.setItem('votedetails', JSON.stringify(this.state.voteParty))
//     }
//   }
//   // Incrementing the vote count by one for the respective language
//   addition(index) {
//     let arr= this.state.voteParty;
//     arr[index].vote++;
//     this.setState({
//       voteParty: arr.sort((a, b) => b.vote - a.vote)
//     });
//   }
//   render()
//   {
// return (<>
//  <Header/>
//  <div className="box">
//         {
//           this.state.voteParty.map(({name,vote}, index)=>
//             <div key={index} className='item'>

//               <div className='name'>{name}</div>
//               <div className='count' >{vote}</div>
//               <button className='votebutton' onClick={this.addition.bind(this, index)}>Vote For Me</button>
//             </div>
//           )
//         }
//       </div>

//       <button className='clearbutton' onClick={()=>{this.resetState()}}>Clear All</button>
//       </>
// );
// }
// }

const App = () => {
  let voteParty = [
    { name: "Javascript", vote: 0 },
    { name: "Python", vote: 0 },
    { name: "Java", vote: 0 },
    { name: "C++", vote: 0 },
    { name: "Kotlin", vote: 0 },
  ];
  if (JSON.parse(localStorage.getItem("myData"))) {
    voteParty = JSON.parse(localStorage.getItem("myData"));
  }
  const [curr, nextState] = useState(voteParty);

  const reset = () => {
    const currParty = [
      { name: "Javascript", vote: 0 },
      { name: "Python", vote: 0 },
      { name: "Java", vote: 0 },
      { name: "C++", vote: 0 },
      { name: "Kotlin", vote: 0 },
    ];
    nextState(currParty);
  };
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("myData"));
    if (getData) {
      nextState(getData);
    }
  }, []);
  useEffect(() => {
    const info = JSON.stringify(curr);
    localStorage.setItem("myData", info);
  }, [curr]);

  const addition = (index) => {
    let arr = [...curr];
    arr[index].vote++;
    let newarr = arr.sort((a, b) => b.vote - a.vote);
    nextState(newarr);
  };
  return (
    <>
      <Header />
      <div className="box">
        <>
          {curr.map(({ name, vote }, index) => (
            <div key={index} className="item">
              <div className="name">{name}</div>
              <div className="count">{vote}</div>
              <button
                className="votebutton"
                onClick={() => {
                  addition(index);
                }}
              >
                Vote For Me
              </button>
            </div>
          ))}
        </>
      </div>
      <button className="clearbutton" onClick={reset}>
        Clear All
      </button>
    </>
  );
};

export default App;
