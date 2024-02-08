import React from 'react'
import MinNav from './components/MinNav'
import Navbar from './components/Navbar'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <MinNav />
          <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
      <Footer/>
    </div>


  )
}

export default App