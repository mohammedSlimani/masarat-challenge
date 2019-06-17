
import React, { Component } from 'react'
import axios from 'axios';


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

  render() {
    const problems = this.state.problems;
    console.log(problems);
    return (
      <div>
        <ul>
          {this.state.loading && 'DATA IS LOADING'}
          {!this.state.loading && 'I have the problems now'}
        </ul>
      </div>
    )
  }
}

export default App
