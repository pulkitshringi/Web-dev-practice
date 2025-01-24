import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './Content'

function App() {
    let [cnt,setCnt] = useState(0);
  return (
    <>
      <h3>{cnt}</h3>
    <form onSubmit={(e) => {
    e.preventDefault();
    setCnt((cnt) => cnt + 1);
  }}>
      <button>Click me cums so aride</button>
    </form>
    </>
  )
}

export default App
