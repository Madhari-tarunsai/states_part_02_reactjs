import React from 'react';
import './Counte.css'

class Count extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  Increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  Decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  Null = () => {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className='main'>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment} >Increment (+)</button>
        <button onClick={this.Null} >Reset (null)</button>
        <button onClick={this.Decrement} >Decrement (-)</button>
      </div>
    );
  }
}

export default Count;
