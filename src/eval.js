const easy = function(){

    const op =['+','-','*','/'];

    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random() * 10);
    const randOp = op[Math.floor(Math.random() * op.length)]
    const result = eval(num1+randOp+num2);

    return ({num1:num1, num2:num2, op1:randOp,ans:result});
}

module.exports = easy;
