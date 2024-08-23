import React,{memo} from 'react'

function MemoChild(props) {
    console.log('child emmo',props.count);
  return (
    <div>
      <h2>MemoChild {props.count}</h2>
    </div>
  )
}

export default memo(MemoChild)
