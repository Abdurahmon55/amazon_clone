import React from 'react'
import MinNav from './components/MinNav'
import Navbar from './components/Navbar'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Results from './page/Results'
import PageCard from './page/PageCard'
import Login from './page/Login'
import ShopCard from './page/ShopCard'
import Register from './page/Register'
import Sell from './page/Sell'
import UpdateUserProduct from './page/UpdateUserProduct'
import TopSell from './page/TopSell'
import ResultsPage from './page/ResultsPage'

function App() {
  return (
    <div>
      <Navbar />
      <MinNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='Category/:id' element={<Results/>}/>
        <Route path='resault/:brand' element={<ResultsPage/>}/>
        <Route path='Praduct/:id' element={<PageCard/>}/>
        <Route path='Login/' element={<Login/>}/>
        <Route path='Register/' element={<Register/>}/>
        <Route path='shopCard/' element={<ShopCard/>}/>
        <Route path='sell/' element={<Sell/>}/>
        <Route path='top/sell/' element={<TopSell/>}/>
        <Route path='updated/:id/' element={<UpdateUserProduct/>}/>
      </Routes>
      <Footer />
    </div>


  )
}

export default App