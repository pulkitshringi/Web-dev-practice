// components/Modal.jsx
import React from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom'


const Modal = (prop) => {

const navigate = useNavigate();
  const onNavigate = () => {
    navigate('..'); // similar to cd .. 
  }

  return (
    <>
    <div className={classes.backdrop} onClick={onNavigate} />  
    <dialog open className={classes.modal}>
    {prop.children}
    </dialog>
    </>
  )
}

export default Modal