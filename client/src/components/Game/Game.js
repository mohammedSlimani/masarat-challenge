import React, { Component } from 'react'


//This class is going to take the problem and take the result of the user
export class Game extends Component {
    state={
        ...this.props.prob,
        userOp1:'.',
        userOp2:'.'
    }
    
    handleOnclickOp1 = (e)=>{
        this.setState({userOp1:e.target.value});
    }

    handleOnclickOp2 = (e) => {
        this.setState({ userOp2: e.target.value });
    }

    handleSubmit = (e)=>{
        if(this.state.op1 === this.state.userOp1 && 
            (this.state.op2 === this.state.userOp2 || this.state.userOp2 ==='.') ){
            alert('CORRECT');
        }
        else{
            alert('wrong')
        }
    }

    render() {
        console.log("state in the game componenet",this.state.num1);
        return (
            <div>
            <center>
                <div id='num1'>{this.state.num1}</div>
                <div id='op1'>{this.state.userOp1}</div>
                <div id='num2'>{this.state.num2}</div>
                {this.state.diff === 'hard' &&
                    <>
                        <div id='op2'>{this.state.userOp2}</div>
                        <div id='num3'>{this.state.num3}</div>
                    </>
                }
                
                <div id='eq'>=</div>
                <div id='ans'>{this.state.ans}</div>

                <div id='user-answer'>
                    choose for op1:
                    <button value='+' onClick={this.handleOnclickOp1}>+</button>
                    <button value='-' onClick={this.handleOnclickOp1}>-</button>
                    <button value='*' onClick={this.handleOnclickOp1}>*</button>
                    <button value='/' onClick={this.handleOnclickOp1}>/</button>
                </div>
                {this.state.diff === 'hard' && 
                    <div id='user-answer'>
                        choose for op2:
                    <button value='+' onClick={this.handleOnclickOp2}>+</button>
                    <button value='-' onClick={this.handleOnclickOp2}>-</button>
                    <button value='*' onClick={this.handleOnclickOp2}>*</button>
                    <button value='/' onClick={this.handleOnclickOp2}>/</button>
                    </div>
                }
                <button onClick ={this.handleSubmit}>ANSWER</button>
            </center>
            </div>
        )
    }
}

export default Game;
