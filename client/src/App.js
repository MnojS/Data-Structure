import React, { useState } from 'react'
import './App.css'

const App = () => {
  let [state, setState] = useState(0)

  const incrementValue = (e) => {
    // e.preventDefault()
    setState(state++)
  }
  return (
    <div className='App'>
      <span>{state}</span>
      <button onClick={incrementValue}>Increment</button>
    </div>
  )
}

export default App
