import React,{memo} from 'react'

function ChildCallback(props) {
    console.log('child callback',props);
  return (
    <div>
      <h5>ChildCallback {props.func()}</h5>
    </div>
  )
}

export default memo(ChildCallback)
