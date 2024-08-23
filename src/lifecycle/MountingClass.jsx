import React, { Component } from 'react'
import ClassLifeComp2 from './ClassLifeComp2';

export default class MountingClass extends Component {
    constructor(){
        super()
        this.state={
            a:0,
            obj:[]
        }
        console.log('constructor',1);
    }

    static getDerivedStateFromProps(props,state){
        // console.log("props",props);
        // console.log("state",state);
        console.log('getDerivedStateFromProps',2);

        return true
    }

    componentDidMount(){
        console.log('componentDidMount',8);
    }

  render() {
    console.log('render',3);
    return (
      <div>
        <h1>MountingClass</h1>
        <ClassLifeComp2/>
      </div>
    )
  }
}
