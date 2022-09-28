import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Component/Header-Footer/Footer'
import Header from './Component/Header-Footer/Header'
import Shop from './Component/Shop'
import Home from './Component/Home'
import Loading from './Component/Header-Footer/Loading'
import NotFound from './Component/NotFound'



export default function App() {
  return (
    <>
      <Header/>
      <Loading/>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}