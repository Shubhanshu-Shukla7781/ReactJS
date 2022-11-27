import React from'react';
import Header from './Header';

class App extends React.Component {
  constructor()
  {
    super()
    this.state = {
      languages: [
        { name: "Javascript", vote: 0 },
        { name: "Python", vote: 0 },
        { name: "Java", vote: 0 },
        { name: "C++", vote: 0 },
        { name: "Kotlin", vote: 0 },
      ]
    }
  }

  //resetState function is used to setState to initial state from where this game started 
  resetState(){
    this.setState({
      languages: [
        { name: "Javascript", vote: 0 },
        { name: "Python", vote: 0 },
        { name: "Java", vote: 0 },
        { name: "C++", vote: 0 },
        { name: "Kotlin", vote: 0 },
      ]
    })
  }
  // componentDidMount for getting the stored values from the local storage
  componentDidMount() {
    if (window.localStorage.getItem('votedetails')) {
      this.setState({
        languages: JSON.parse(window.localStorage.getItem('votedetails'))
      })
    }
  }
  // componentDidUpdate for storing the current state values into the local storage
  componentDidUpdate( prevState) {
    if(this.state.languages !== prevState.language){
      window.localStorage.setItem('votedetails', JSON.stringify(this.state.languages))
    }
  }
  // Incrementing the vote count by one for the respective language
  addition(index) {
    let arr= this.state.languages;
    arr[index].vote++;
    this.setState({
      languages: arr.sort((a, b) => b.vote - a.vote)
    });
  }
  render()
  {
  return (<>
   <Header/>
   <div className="box">
          {
            this.state.languages.map(({name,vote}, index)=>
              <div key={index} className='item'>
                
                <div className='name'>{name}</div>
                <div className='count' >{vote}</div>
                <button className='votebutton' onClick={this.addition.bind(this, index)}>Vote For Me</button>
              </div>
            )
          }
        </div>

        <button className='clearbutton' onClick={()=>{this.resetState()}}>Clear All</button>
        </>
  );
}
}

export default App;
