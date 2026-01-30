import React, { useState } from 'react'

const counter = () => {
  let [count, setCount] = useState(0);
  
  let inCount = () => {
    setCount(count+1);
   // console.log(count);
  }
 
  return (
    <div>
      <h3>count = {count} </h3>
      <button onClick={inCount}>Increase count</button>
    </div>
  )
}

export default counter
