import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Homepage/Home';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import { Logged } from '../Logged/Logged';
import { Addtocart } from '../Addtocart/Addtocart';
import { Vegetables } from '../Vegetables/Vegetables';
import { Fruits } from '../Fruits/Fruits';
import { Groceries } from '../Groceries/Groceries';
import { Cooldrinks } from '../Coodrinks/Cooldrinks';


export const Routing = () => {
  return (
    
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='/Footer' element={<Footer />}></Route>
                <Route path='/Logged' element={<Logged />}></Route>
                <Route path='/Addtocart' element={<Addtocart />}></Route>
                <Route path='/Vegetables' element={<Vegetables />}></Route>
                <Route path='/Fruits' element={<Fruits />}></Route >
                <Route path='/Groceries' element={<Groceries />}></Route>
                <Route path='/Cooldrinks' element={<Cooldrinks />}></Route>


                </Routes>
          </BrowserRouter>



   
  )
}
