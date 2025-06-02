// import React,{ useContext, useState } from 'react'
// import './Navbar.css'
// import { useRef } from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import { ShopContext } from '../../Context/ShopContext'
// import dropdown_icon from '../Assets/dropdown_icon.png'
// const Navbar = () => {
//      const [menu,setMenu] = useState("All");
//      const {getTotalCartItems} =useContext(ShopContext)
//      const menuRef = useRef();

//      const dropdown_toggle=(e) =>{
//       menuRef.current.classList.toggle('nav-menu-visible');
//       e.target.classList.toggle('open');
//      }
      
//   return (
//     <div className='navbar'>
//       <div className="nav-logo">
//         <img src={logo} alt=""/>
//         <p>SHOPPER</p>
//       </div>
      
//       <img className="drop-down" onClick={dropdown_toggle} src={dropdown_icon} alt="" />
//       <ul ref={menuRef} className='nav-menu'>
//         <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
//         <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
//       </ul>
//       <div className="nav-login-cart">
//         <Link to='/login'><button>Login</button></Link>
//         <Link to='/cart'><img onClick={() => window.location.href = '/cart'} src={cart_icon} alt=""/></Link>
//         <div className="nav-cart-count">{getTotalCartItems()}</div>

//       </div>
//     </div>
//     // <div className="nav-login-cart">

//     // </div>
//   )
// }

// export default Navbar


import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("All");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    // Toggle the 'nav-menu-visible' class to show or hide the menu
    menuRef.current.classList.toggle('nav-menu-visible');
    // Toggle the 'open' class on the dropdown icon to rotate it
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      {/* Dropdown icon for showing/hiding the menu */}
      <img className="drop-down" onClick={dropdown_toggle} src={dropdown_icon} alt="" />

      {/* Navigation menu that will be shown or hidden based on the 'nav-menu-visible' class */}
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link to='/mens'>Men</Link> {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link to='/womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      {/* Login and Cart */}
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
        <Link to='/login'>
        <button>Login</button>
      </Link>
      }
        {/* <Link to='/login'>
          <button>Login</button>
        </Link> */}
        <Link to='/cart'>
          <img onClick={() => window.location.href = '/cart'} src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
