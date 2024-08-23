import React, { Component } from 'react'

export default class UpdatingCycle extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
        console.log('constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log("props",props);
        console.log("state",state);
        console.log('getDerivedStateFromProps');
        return true
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevProps);
        console.log(prevState);
        console.log("getSnapshotBeforeUpdate");
        return 'oscar'
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
        console.log("componentDidUpdate");
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
  render() {
    console.log('render');
    return (
      <div>
       <h1> Count:{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Count</button>
      </div>
    )
  }
}
