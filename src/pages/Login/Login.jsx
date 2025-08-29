import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/logo.png'
import background_img from '../../assets/background_banner.jpg'
import {login, signup} from '../../firebase.js'

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async(event)=>{
    event.preventDefault();
    if(signState==="Sign In"){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
  }

  const [signState, setsignState] = useState("Sign In")

  return (
    <div className="login">
      <img src={logo} className='login-logo' alt="" />
      <img src={background_img} className='background_img' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up"?<input value={name} onChange={(e)=> {setName(e.target.value)}} type='text' className='input-field' placeholder='Username'/>:<></>}
          <input value={email} onChange={(e)=> {setEmail(e.target.value)}} type='email' className='input-field' placeholder='Email'/>
          <input value={password} onChange={(e)=> {setPassword(e.target.value)}} type='password' className='input-field' placeholder='Password' />
          <div className="sign-in-btns">
            <button onClick={user_auth} type='submit' className='red-btn'>{signState}</button>
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
