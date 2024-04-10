import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TiShoppingCart } from "react-icons/ti";
import { useSelector,useDispatch } from 'react-redux'
import { updateProduct } from '../Reducer/Reducer';
import { Link  } from "react-router-dom"


import './Style.css'

export const Vegetables = () => {
  const state = useSelector((shopping) => shopping.data)
  console.log(state)
  let dispatch = useDispatch()


  const navigate3 = useNavigate()
  const handleNavigate3 = () => {
    navigate3("/Addtocart")
}

  let handlecart = (id) => {
    console.log(id);

    let data = state.product.map((a) => {
      return id === a.id ? { ...a, iscart: true } : a
    })
    dispatch(updateProduct(data))
  }
  
  return (
    <div>
      <header className='Home'>
        <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/assets/ui/print/bl_logo_web.png' alt='#' className='Tlogo' />
        <div className='location'>
          <h3>Fastest delivery </h3>
        </div>

        <input type='text' className='search' placeholder='What are you looking for...'></input>
        <button className='logbtn'>login</button>
        <div className='container2'>
        <Link to='/Addtocart'><button  className='cart'><TiShoppingCart />Cart</button> </Link></div>
      </header>
      <nav>
        <ul>
          <li><a href="#">Vegetables & Fruits</a></li>
          <li><a href="#">Dairy & Breakfast</a></li>
          <li><a href="#">Munchies</a></li>
          <li><a href="#">Cold Drinks & Juices</a></li>
          <li><a href="#">Instant & Frozen Food</a></li>
          <li><a href="#">Tea, Coffee & Health Drinks</a></li>
          <li><a href="#">Bakery & Biscuits</a></li>
          <li><a href="#">More</a></li>
        </ul>
      </nav>
      <div className='banner'>
        <img src='https://i.pinimg.com/736x/9d/14/ba/9d14baea83fd06652fe8940effe5d0e5.jpg' alt='#' />
        <h1 className='txt'>Vegetables</h1>

      </div>
      <div style={{ marginLeft: "70px" }}>

        {state.product.map((v, i) => {
          return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {v.Vegetables.map((x, y) => {
                return (
                  <div style={{ width: "23%", margin: "10px" }}>
                    <img style={{ height: "300px", width: "300px" }} src={x.image} alt='img'></img>
                    <h3 style={{ marginLeft: "20px" }}>{x.name}</h3>
                    <h3 style={{ marginLeft: "20px" }}><span style={{textDecoration:"line-through"}}>{x.price}</span>{x.discount}<span></span> </h3>
                    <h3 style={{ marginLeft: "20px" }}>{x.quantity}</h3>
                    <button onClick={() => handlecart(v.id)}> Add to cart</button>
                   
                    
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>



    </div>
  )
}

