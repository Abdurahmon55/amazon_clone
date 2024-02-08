import React from 'react'
import MinNav from './components/MinNav'
import Navbar from './components/Navbar'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Results from './page/Results'

function App() {
  return (
    <div>
      <Navbar />
      <MinNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='Category/:id' element={<Results/>}/>
      </Routes>
      <Footer />
    </div>


  )
}

export default App