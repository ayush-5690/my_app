import React, { Component,PureComponent } from 'react'

export default class PureComponent1 extends PureComponent {
    constructor(){
        super()
        this.state={
            count:1
        }
        
    }
  render() {
    {console.log('pure component')}
    return (
      <div>
        <h1>Pure component{this.state.count}</h1>
        <button onClick={()=>this.setState({count:20})}>Click</button>
      </div>
    )
  }
}
