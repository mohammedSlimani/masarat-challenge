import React, { Component } from 'react'


//This class is going to take the problem and take the result of the user
export class Game extends Component {
    state={
        ...this.props.prob,
        userOp1:undefined,
        userOp2:undefined
    }
    
    render() {
        console.log("state in the game componenet",this.state.num1);
        return (
            <div>
                <div id='num1'>{this.state.num1}</div>
                <div id='op1'>.</div>
                <div id='num2'>{this.state.num2}</div>
                <div id='op2'>{this.state.op2}</div>
                <div id='num3'>{this.state.num3}</div>
                <div id='eq'>=</div>
                <div id='ans'>{this.state.ans}</div>

                <div id='user-answer'>
                    <input></input>
                </div>
            </div>
        )
    }
}

export default Game;
