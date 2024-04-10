import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct,updateCart } from "../Reducer/Reducer";
import  { useState ,useEffect} from "react";


export const Addtocart = (() => {
  const [name ,setname] = useState([])
  const state = useSelector((Vegetables) => Vegetables.data)
  console.log(state)
  let dispatch = useDispatch()

  useEffect(() => {
    let data = state.product.filter((a) => {
      return a.iscart == true
    })
    setname(data)

  })

  let handlecart = (id) => {
    console.log(id);

    let data = state.product.map((a) => {
      let data1=state.Vegetables.map((b)=>{
        return id === b.id ? { ...b, iscart: true } : b

      })
      dispatch(updateCart(data1))
      
      
    })
    dispatch(updateCart(data))

  }

  
  return (
    <div>
      <header className='Home'>
        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png' className='Tlogo' alt='#' />
        <div className='location'>
        <h3>Fastest delivery </h3>
        </div>
        <input type='text' className='search' placeholder='What are you looking for...'></input>
        <button className='logbtn' >login</button>
        <div className='container2'>
        <button className='cart'><TiShoppingCart />Cart</button></div>
      </header>
      

      
      
      </div>
  )
})

export default Addtocart