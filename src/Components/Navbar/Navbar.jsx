import React,{ useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
     const [menu,setMenu] = useState("All");
     const {getTotalCartItems} =useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img onClick={() => window.location.href = '/cart'} src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

      </div>
    </div>
    // <div className="nav-login-cart">

    // </div>
  )
}

export default Navbar
