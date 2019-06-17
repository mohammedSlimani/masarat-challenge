import React, { Component } from 'react'


//This class is going to take the problem and take the result of the user
export class Game extends Component {
    state={
        ...this.props.prob,
        userOp1:undefined,
        userOp2:undefined
    }
    
    handleOnclick=(e)=>{
        console.log(e.value);
    }

    render() {
        console.log("state in the game componenet",this.state.num1);
        return (
            <div>
                <div id='num1'>{this.state.num1}</div>
                <div id='op1'>op1</div>
                <div id='num2'>{this.state.num2}</div>
                {this.state.diff === 'hard' &&
                    <>
                        <div id='op2'>op2</div>
                        <div id='num3'>{this.state.num3}</div>
                    </>
                }
                <div id='eq'>=</div>
                <div id='ans'>{this.state.ans}</div>

                <div id='user-answer'>
                    choose for op1:
                    <button onClick={this.handleOnclick}>+</button>
                    <button onClick={this.handleOnclick}>-</button>
                    <button onClick={this.handleOnclick}>*</button>
                    <button onClick={this.handleOnclick}>/</button>
                </div>
                {this.state.diff === 'hard' && 
                    <div id='user-answer'>
                        choose for op2:
                    <button value='+' onClick={this.handleOnclick}>+</button>
                        <button value='-' onClick={this.handleOnclick}>-</button>
                        <button value='*' onClick={this.handleOnclick}>*</button>
                        <button value='/' onClick={this.handleOnclick}>/</button>
                    </div>
                }
            </div>
        )
    }
}

export default Game;
