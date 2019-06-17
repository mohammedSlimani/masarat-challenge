import React, { Component } from 'react'

const styles = {padding:'1em',width:20,high:20,margin:4}

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
                    <div id='num1' style={styles}>{this.state.num1}</div>
                    <div id='op1' style={styles}>{this.state.userOp1}</div>
                    <div id='num2' style={styles}>{this.state.num2}</div>
                {this.state.diff === 'hard' &&
                    <>
                        <div id='op2'>{this.state.userOp2}</div>
                        <div id='num3'>{this.state.num3}</div>
                    </>
                }
                
                    <div id='eq' style={styles}>=</div>
                    <div id='ans' style={styles}>{this.state.ans}</div>

                <div id='user-answer'>
                    choose for op1:
                    <button value='+' onClick={this.handleOnclickOp1} style={styles}>+</button>
                        <button value='-' onClick={this.handleOnclickOp1} style={styles}>-</button>
                        <button value='*' onClick={this.handleOnclickOp1} style={styles}>*</button>
                        <button value='/' onClick={this.handleOnclickOp1} style={styles}>/</button>
                </div>
                {this.state.diff === 'hard' && 
                    <div id='user-answer'>
                        choose for op2:
                        <button value='+' onClick={this.handleOnclickOp2} style={styles}>+</button>
                        <button value='-' onClick={this.handleOnclickOp2} style={styles}>-</button>
                        <button value='*' onClick={this.handleOnclickOp2} style={styles}>*</button>
                        <button value='/' onClick={this.handleOnclickOp2} style={styles}>/</button>
                    </div>
                }
                <button onClick ={this.handleSubmit} style={{color:'red'}}>ANSWER</button>
            </center>
            </div>
        )
    }
}

export default Game;
