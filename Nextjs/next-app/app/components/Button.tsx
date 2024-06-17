// Button.tsx
'use client';
import React from 'react';
const Button = () => {
  return (
    <button className={`btn btn-primary`} onClick={()=>{console.log("button working")}}>Click Me</button>
  )
}

export default Button