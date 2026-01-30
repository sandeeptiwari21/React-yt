import React, {useState} from 'react'

const App = () => {
  const [num,setNum] = useState(0);

  function increase() {
    setNum(num+1)
  }

  function Decrease(){
    setNum(num-1)
  }

  function Increaseby(){
    setNum(num+5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Increaseby}>Increase by 5</button>
    </div>
  )
}

export default App


