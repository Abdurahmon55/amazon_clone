import React from 'react'
import MinNav from './components/MinNav'
import Navbar from './components/Navbar'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <MinNav />
      <div className='co container m-auto'>
          <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    
    </div>


  )
}

export default App