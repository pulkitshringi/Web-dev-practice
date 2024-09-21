// src/routes/RootLayout.jsx
 import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import React from 'react'

const RootLayout = () => {
  return (
  <>
    <MainHeader/>
    <Outlet/>  
  </>
  )
}

export default RootLayout