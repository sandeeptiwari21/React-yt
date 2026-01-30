import React, {useState} from 'react'

const App = () => { 

  const [title, setTitle] = useState('')

  const Submitbtn =(elem) =>{
    elem.preventDefault()
    console.log('Form submitted by', title);
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        Submitbtn(elem)
      }} >
        <input type="text" placeholder='Enter your name'
        value={title}
        onChange={(elem)=>{
          setTitle(elem.target.value);
        }}
         />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
