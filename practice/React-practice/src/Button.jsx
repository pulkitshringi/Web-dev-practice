import React from 'react'
import { useState } from 'react';

const Button = () => {
    let [counter,setCounter] = useState(0);
    const buttonEvent = () => {
        setCounter((c)=>{return c+=1});
    }
  return (
    <div>
        <button onClick={buttonEvent}>Click me</button>
        <p>Counter: {counter}</p>
    </div>
  )
}

export default Button;