// components/Modal.jsx
import React from 'react'
import classes from './Modal.module.css'

const Modal = (prop) => {
  return (
    <>
    <div className={classes.backdrop} onClick={prop.onHide} />  
    <dialog open className={classes.modal}>
    {prop.children}
    </dialog>
    </>
  )
}

export default Modal