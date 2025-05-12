import React from 'react'

import './Bgcolor.css'

 class Bgcolor extends React.Component {
  constructor(){
    super();
    this.state={
      color:''
    }
  }
  handlerChange=()=>{
    const chars='0123456789abcdef'
    let color='#'
     for(let i=0;i<6;i++){
      const random=Math.floor(Math.random()*chars.length)
      color+=chars[random]
    
  }
  this.setState({color:color})
  }
 

  render() {
    return (
      <div className='div1 ' style={{backgroundColor:this.state.color}}>
        <button onClick={this.handlerChange}>Click_Here  </button>
      </div>
    )
  }
}
export default  Bgcolor
