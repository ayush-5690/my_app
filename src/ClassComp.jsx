import React, { Component } from 'react'
import classCss from './assets/css/clascomp.module.css'

export class ClassComp extends Component {
  constructor(){
    super()
    this.state={
      name:'oscar',
      aray:[],
      obj:{},
      num:0
    }
    this.decrementFunc=this.decrementFunc.bind(this)
  }
  incrementFunc=()=>{
    this.setState({num:this.state.num+1})
 }
 decrementFunc(){
    this.setState({num:this.state.num-1})
 }
  
  render() {
    return (
      <div className={classCss.div}>
        <h1 className={classCss.head}>{this.state.num}</h1>
        <button onClick={this.incrementFunc}>Increment</button>
        <button onClick={()=>this.decrementFunc(this)}>Decrement</button>
      </div>
    )
  }
}
