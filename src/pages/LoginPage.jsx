import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiLock , CiUser , CiMail , CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { signInWithGoogle } from '../services/userFun';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../features/userSlice';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const LoginPage = () => {
    const navigate  = useNavigate();
    const dispatch = useDispatch();
    const [formData , setFormData] = useState({
        username:"",
        email:"",
        password:""
    })

    const onChangeText = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }


    const googleSignIn = async () => {
        const userData= await signInWithGoogle();
        dispatch(updateUserData(userData));
        navigate("/")
        // console.log(email , photoURL , displayName , uid);
    }


    useEffect(()=> { 
        const unSub = onAuthStateChanged(auth,(user) => {
            if(user){
                console.log(user.providerData[0])
                const userData = user.providerData[0] ;
                dispatch(updateUserData(userData));
                navigate("/")
            }
        });

        return unSub ;
     } ,[])

  return (
    <div className="main">
        {/* <div className="navbar">
              <div className="navHeader"  >
                  <button className="navHeaderText gradientText" onClick={() => navigate("/")} > EasyCom</button>
              </div>
        </div> */}

        <div className="container flexCenter">
           <div className="loginFormContainer">
            
           <div className="formWrapper">
                      <form className='form' >
                          <h3 className='gradientText' >Sign In to your account</h3>
                          <div style={{marginBottom:"2rem"}} >
                              <span>Don't have an account?</span> <span className="signup" onClick={() => navigate("/register")} >Sign Up</span>
                          </div>

                          <div className="inputDiv">
                              <label htmlFor="username"> <CiMail size={18} /> </label>
                              <input name='email' type='email' placeholder='email' value={formData.email} onChange={(e) => onChangeText(e)} className='textInput' />
                          </div>

                          <div className="inputDiv">
                              <label htmlFor="username"> <CiLock size={18} />  </label>
                              <input name='password' type='password' placeholder='password' value={formData.password} onChange={(e) => onChangeText(e)} className='textInput' />
                          </div>

                          

                          <button className="formLoginBtn">
                              Sign In <CiLogin />
                          </button>

                          <span>Or</span>

                          
                      </form>

                      <button className="googleSignInBtn" onClick={googleSignIn} >
                          <FcGoogle />   Sign In With Google
                      </button>
           </div>

                 
           </div>
        </div>
    </div>
  )
}

export default LoginPage