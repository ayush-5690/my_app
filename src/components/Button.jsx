import React,{memo} from 'react'

function Button(props) {
    console.log('child button',props.value);
  return (
    <div>
      <button onClick={props.changevalue}>{props.value}</button>
    </div>
  )
}

export default memo(Button)
