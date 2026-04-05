import { useState,useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Cart from './pages/cart'
import NotFound from './pages/not-found'
import ProductDetails from './pages/products-details'
import './App.css'
import NavBar from './components/nav-bar/nav-bar'
import { LanguageProvider } from './providers/language'
import { languageContext } from './context/language'
function App() {
  const {language}  = useContext(languageContext);
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
        <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products/:id" element={<ProductDetails/>}></Route>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path='/cart'element={<Cart/>}></Route>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
   
    </div>
    
  )
}

export default App
