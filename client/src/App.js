import React, { Component } from 'react'
import axios from 'axios';
import Game from './components/Game/Game';


export class App extends Component {
  constructor(){
    super();
    this.state={
      loading: true,
      problems:[],
    }
  }

  getProblems = async (type) => {
    try {
      const problems = await axios.get('https://smed-masarat.glitch.me/api/'+type);
      console.log('resolved', problems.data);
      this.setState({
        loading:false,
        problems:[...problems.data]
        });
    } catch (err) {
      console.log(err);
    }
  } 

  componentDidMount(){
    this.getProblems('easy');
  }

  getRandom = ()=>{
    return this.state.problems[Math.floor(Math.random() * this.state.problems.length)];
  }
/*
  controlDiff = (diff) => {
    this.setState({diff:diff});
    this.getProblems();
  }
*/
  render() {
    const problems = this.state.problems;
    console.log(problems);
    //console.log("random item", this.getRandom);
    return (
      <div>
        <button value='easy' >EASY</button>
        <button value='hard'>HARD</button>
        <ul>
          {this.state.loading? 'DATA IS LOADING':<Game prob ={this.getRandom()} />}
        </ul>
      </div>
    )
  }
}

export default App
