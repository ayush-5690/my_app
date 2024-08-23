import React, { Component } from 'react'

export default class ClassLifeComp2 extends Component {
    constructor(){
        super()
        this.state={

        }
        console.log("constructor 2",4);
    }
   
    componentDidMount(){
        console.log("componentDidMount 2",7);
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps 2",5);
        return true
    }
  render() {
    console.log("render 2",6);
    return (
      <div>
        <h2>ClassLifeComp2</h2>
      </div>
    )
  }
}
