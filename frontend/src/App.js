import React from 'react'
import MinNav from './components/MinNav'
import Navbar from './components/Navbar'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Results from './page/Results'
import PageCard from './page/PageCard'
import Login from './page/Login'

function App() {
  return (
    <div>
      <Navbar />
      <MinNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='Category/:id' element={<Results/>}/>
        <Route path='Praduct/:id' element={<PageCard/>}/>
        <Route path='Category/:id/Praduct/:id' element={<PageCard/>}/>
        <Route path='Login/' element={<Login/>}/>
      </Routes>
      <Footer />
    </div>


  )
}

export default App