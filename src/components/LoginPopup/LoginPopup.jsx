import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowlogin}) => {

    const [currentState,setCurrentState]=useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currentState==="Login"?<></>:<input type='text' placeholder='Your Name' required/>}
            <input type="Email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button> {currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>I Agree to the Terms and Conditions</p>
        </div>
        {currentState==="Login"?
        <p>Create a new Account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        
      </form>
    </div>
  )
}

export default LoginPopup
