import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import {  useNavigate } from 'react-router-dom';


export const Details = () => {
    const navigate3 = useNavigate()
    const handleNavigate3 = () => {
        navigate3("/Addtocart")
    }
  return (
    <div>
        <header className='Home'>
        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png' className='Tlogo' alt='#' />
        <div className='location'>
        <h3>Fastest delivery </h3>
        </div>
        <input type='text' className='search' placeholder='What are you looking for...'></input>
        <button className='logbtn'>login</button>
        <div className='container2'>
        <button onClick={handleNavigate3} className='cart'><TiShoppingCart />Cart</button></div>
        </header>
    </div>
  )
}
