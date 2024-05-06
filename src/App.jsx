import './App.css'
import { BrowserRouter,Routes,Route, HashRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import CategoryPage from './pages/CategoryPage'
import ProductDetails from './pages/ProductDetails'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useDispatch, useSelector } from 'react-redux'
import CartPage from './pages/CartPage'
import UnAuthenticated from './pages/UnAuthenticated'
// import {useJwt} from 'react-jwt'
import { useState,useEffect } from 'react'
import { getCartItems } from './features/cart/asyncFunctions'
import styled from 'styled-components'


function App() {
  const {loggedIn } = useSelector((state)=>state.user);
  const dispatch = useDispatch();
 
  useEffect(()=>{
    if (loggedIn) {
      
      dispatch(getCartItems(localStorage.getItem('token')));
    }
  },[loggedIn])
  
    
  

 
  return (
  <BrowserRouter basename='/myStore'>
      <Navbar />


    <MainCont>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path = '/category/:thisCategory' element = {<CategoryPage />} />
        <Route path = '/products/:productId' element = {<ProductDetails />} />

        <Route path = '/auth/login' element = {<LoginPage />} />
        <Route path = '/auth/register' element = {<RegisterPage />} />

        <Route path = '/cart' element = {loggedIn? <CartPage /> : <UnAuthenticated /> } />
 
      

      </Routes>
    </MainCont>
  </BrowserRouter>
    )
}

export default App


const MainCont = styled.main`

`