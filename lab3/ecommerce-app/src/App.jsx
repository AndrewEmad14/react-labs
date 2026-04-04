import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Cart from './pages/cart'
import NotFound from './pages/not-found'
import ProductDetails from './pages/products-details'
import './App.css'
import NavBar from './components/nav-bar/nav-bar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}></Route>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path='/cart'element={<Cart/>}></Route>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
