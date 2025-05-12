import React, { Component } from 'react'
import './Dark.css'


export default class App extends Component {
  constructor(){
    super()
    this.state={
      isDark:false,
    }
  }


  handleTheme=()=>{
    this.setState(prevState=>({isDark:!prevState.isDark}))
  }
  render() {
    return (
      <div style={{backgroundColor:this.state.isDark ? "black":"white"}}>
        <button onClick={this.handleTheme}>{this.state.isDark ? "Light":"Dark"}</button>
      </div>
    )
  }
}
