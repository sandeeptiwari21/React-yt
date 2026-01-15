import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user='sarthak mishra' age={18} />
      <Card user='sandeep tiwari' age ={21} />
    </div>
  )
}

export default App
