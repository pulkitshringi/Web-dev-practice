// app.jsx 
import { useState } from 'react'
import './App.css'
import LudoBoard from './LudoBoard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LudoBoard/>
    </>
  )
}

export default App
