import React, { useContext } from 'react'
import { useState } from "react";
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, Links } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowlogin}) => {

    const[menu,setmenu] = useState("home");

    const{getTotalCartAmmount}= useContext(StoreContext)

  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        <a href='#app-download' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#footer' onClick={()=>setmenu("mobile app")} className={menu==="mobile app"?"active":""}>mobile-app</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmmount()===0?"":"dot"}>
            </div>
        </div>
        <button onClick={()=>setShowlogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
