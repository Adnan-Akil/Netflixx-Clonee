import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import background_img from '../../assets/background_banner.jpg'

const Login = () => {

  const [signState, setsignState] = useState("Sign In")

  return (
    <div className="login">
      <img src={logo} className='login-logo' alt="" />
      <img src={background_img} className='background_img' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"?<input type='text' className='input-field' placeholder='Username'/>:<></>}
          <input type='text' className='input-field' placeholder='Email'/>
          <input type='password' className='input-field' placeholder='Password' />
          <div className="sign-in-btns">
            <button type='submit' className='red-btn'>{signState}</button>
            {signState === "Sign In"? <p>OR</p>: <></>}
            {signState === "Sign In"? <button type='button' className='code-btn'>Use a Sign-In Code</button>: <></>}
          </div>
          <div className="form-help">
            <div className="remember-me">
              <input type="checkbox" />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="signup-page">
          {signState === "Sign In"?<p>New to Netflix? <span onClick={()=>{setsignState("Sign Up")}}> Sign up now.</span></p>
          :<p>Already a member <span onClick={()=>{setsignState("Sign In")}}> Sign in now.</span></p>}
          
          
        </div>
      </div>
    </div>
  )
}

export default Login
