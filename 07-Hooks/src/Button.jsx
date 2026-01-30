import React from 'react'

function Printhello() {
    console.log('hello world')
}

function printbye() {
    console.log('bye')
}

function handleDblClick() {
    console.log("you double clicked")
}


const Button = () => {
  return (
   <div>
    <button onClick={Printhello}>Click me!</button>
    <p onMouseOver={printbye}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sapiente neque molestiae harum eos sed, repellendus corrupti autem quia. Qui?
    </p>
    <button onDoubleClick={handleDblClick}>double click me!</button>
   </div>
  )
}

export default Button
