import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiLock , CiUser , CiMail , CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const navigate  = useNavigate();
    const [formData , setFormData] = useState({
        username:"",
        email:"",
        password:""
    })

    const onChangeText = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

  return (
    <div className="main">
        <div className="navbar">
              <div className="navHeader"  >
                  <button className="navHeaderText gradientText" onClick={() => navigate("/")} > EasyCom</button>
              </div>
        </div>

        <div className="container flexCenter">
           <div className="loginFormContainer">
            
           <div className="formWrapper">
                      <form className='form' >
                          <h3 className='gradientText' >Login to your account</h3>
                          <div style={{marginBottom:"1rem"}} >
                              <span>Don't have an account?</span> <span className="signup" onClick={() => navigate("/register")} >Sign Up</span>
                          </div>
                          {/* <label htmlFor="username"> <CiUser size={18} /> Username </label>
                          <input name='username' type='text' placeholder='username' value={formData.username} onChange={(e) => onChangeText(e)} className='formInput' /> */}

                          <label htmlFor="username"> <CiMail size={18} /> Email </label>
                          <input name='email' type='email' placeholder='email' value={formData.email} onChange={(e) => onChangeText(e)} className='formInput' />

                          <label htmlFor="username"> <CiLock size={18} /> Password </label>
                          <input name='password' type='password' placeholder='password' value={formData.password} onChange={(e) => onChangeText(e)} className='formInput' />

                          <button className="formLoginBtn">
                              Sign In <CiLogin />
                          </button>

                          <span>Or</span>

                          
                      </form>

                      <button className="formLoginBtn">
                          <FcGoogle />   Sign In With Google
                      </button>
           </div>

                 
           </div>
        </div>
    </div>
  )
}

export default LoginPage