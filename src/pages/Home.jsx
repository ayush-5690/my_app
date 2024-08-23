import React from 'react'
import HOC from './HOC'

function Home(props) {
    console.log(props);
  return (
    <div>
        
      <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus veritatis earum magni asperiores tenetur aut mollitia nam fugit amet itaque repellendus architecto, debitis libero ratione sunt quas harum numquam?</p>
    </div>
  )
}

export default HOC(Home) 
