import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headline from './Headline'
import List from './List'
import Iconic from './Iconic'
function App() {
  const [count, setCount] = useState(0)
  let features = ["first","second","third"]
  return (
    <>
     <Iconic></Iconic>
    </>
  )
}

export default App
