import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nabar from './Nabar'
import HomePage from './HomePage'
import About from './About'
import Login from './Login'
import SignUp from './SignUp'
import Search from './Search'
import ProDetial from './ProDetial'
import Women from './Women'
import Men from './Men'
import Couple from './Couple'
import Product from './Product'
import BuyPro from './BuyPro'
import Checkout from './Checkout'
import Thank from './Thank'
import AddCart from './AddCart'
import ContactUs from './ContactUs'
import DarkMod from './DarkMod'
const Contect = () => {
  return (
    <div>
        <Nabar />
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route  path='/about' element={<About />}/>
            <Route  path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/product/:id' element={<ProDetial />}/>
           <Route path='/home/:id' element={<HomePage />}/>
           <Route path='/men' element={<Men />}/>
           <Route path='/women' element={<Women />}/>
           <Route path='/couple' element={<Couple />}/>
           <Route path='/fitnest' element={<HomePage />}/> 
           <Route path='/productmen' element={<Product />}/>
           <Route path='/buypro' element={<BuyPro />}/>
           <Route path='/addcart' element={<AddCart />}/>
           <Route path='/cheak' element={<Checkout />}/>
           <Route path='/thank' element={<Thank />}/>
           <Route path='/contactus' element={<ContactUs />}/>
           <Route path='/dark' element={<DarkMod />}/>
        </Routes>
    </div>
  )
}

export default Contect