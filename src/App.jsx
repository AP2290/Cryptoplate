
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Features from './pages/Features/Features'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Coin/:CoinId' element={<Coin/>} />
        <Route path='/Features' element={<Features/>} />
      </Routes> 
      <Footer/>
    </div>
  )
}

export default App