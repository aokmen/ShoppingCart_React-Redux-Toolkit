import React from 'react'
import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Basket from '../pages/Basket'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/basket" element={<Basket/>} />
         
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter