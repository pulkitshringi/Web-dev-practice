import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <button style="color:green;">Click Me</button>
     <Content content="Imma DISCO BARBER"/>
    </>
  )
}

export default App
