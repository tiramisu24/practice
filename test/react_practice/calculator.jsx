
import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      num1 : "",
      num2 : "",
      result : 0
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.addNums = this.addNums.bind(this);
    this.clear = this.clear.bind(this);

  }
  setNum1(e){
    let num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1});
  }
  setNum2(e){
    let num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({ num2 });
  }
  addNums(e){
    e.preventDefault();
    let result = this.state.num1 + this.state.num2;
    this.setState({result})
  }
  clear(e){
    e.preventDefault();
    this.setState({ num1: "", num2: "", result: 0 });
  }
  render(){
    return (
      <div>
        <h1>Calculator</h1>
        <input onChange={this.setNum1} value ={this.state.num1}></input>
        <input onChange={this.setNum2} value ={this.state.num2}></input>
        <button onClick={this.addNums}>+</button>
        <div>The result is {this.state.result}</div>
        <button onClick={this.clear}>Clear</button>

      </div>
    )
  }
}

export default Calculator;
