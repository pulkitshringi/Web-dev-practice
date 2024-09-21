import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Heading';
import Button from './Button';
function App(){
  return (
    <>
      <Heading/>
      <Button/>
      <p>Some calculations : {2+3}</p>
    </>
  )
}

export default App
