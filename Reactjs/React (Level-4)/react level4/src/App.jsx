// app.jsx 
import { useState } from 'react'
import './App.css'
import LudoBoard from './LudoBoard'
import Todo from './Todo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo/>
    </>
  )
}

export default App
