import React, { Component } from 'react'
import axios from 'axios';
import Game from './components/Game/Game';
import easy from './eval';

export class App extends Component {
  constructor(){
    super();
    this.state={
      loading: true,
      problems:[],
      diff:'easy'
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
    this.getProblems(this.state.diff);
  }

  getRandom = ()=>{
    return this.state.problems[Math.floor(Math.random() * this.state.problems.length)];
  }

  controlDiff = (e) => {
    this.setState({diff:e.target.value,
     loading:true});
    this.getProblems(this.state.diff);
  }

  render() {
    const problems = this.state.problems;
    console.log(problems);
    //console.log("random item", this.getRandom);
    return (
      <div>
        <button onClick={this.controlDiff} value='easy'>EASY</button>
        <button onClick={this.controlDiff} value='hard'>HARD</button>
        <ul>
          {this.state.loading? 'DATA IS LOADING':<Game prob ={easy()} />}
        </ul>
      </div>
    )
  }
}

export default App
