import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiLock, CiUser, CiMail, CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { signInWithEpass, signUpWithEpass } from '../services/userFun';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../features/userSlice';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: "",
        cpassword:""
    });

    const dispatch = useDispatch();


    const onChangeText = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { password , email , name , cpassword} = formData;
        if(!name || !email || !password || !cpassword){
            toast.warn("Please fill all field");
            return ;
        }
        // console.log(formData);
        if(formData.password !== formData.cpassword){
            toast.warn("Password not match ");
            return ;
        }

        const result = await signUpWithEpass(formData.email , formData.password , formData.name);
        console.log(result);
        dispatch(updateUserData(result));
        navigate("/")
    }

    const googleSignIn = async () => {
        const result = await signInWithGoogle();
    }

   

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
                        <form className='form' onSubmit={handleSubmit} >
                            <h3 className='gradientText' >Registeration Form</h3>
                            <div style={{ marginBottom: "1rem" }} >
                                <span>Already have an account?</span> <span className="signup" onClick={() => navigate("/login")} >Login</span>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="name"> <CiUser size={18} />  </label>
                                <input name='name' type='text' placeholder='name' value={formData.name} onChange={(e) => onChangeText(e)} className='textInput' />
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="email"> <CiMail size={18} /> </label>
                                <input name='email' type='email' placeholder='email' value={formData.email} onChange={(e) => onChangeText(e)} className='textInput' />
                            </div>

                          <div className="inputDiv">
                                <label htmlFor="password"> <CiLock size={18} />  </label>
                                <input name='password' type='password' placeholder='password' value={formData.password} onChange={(e) => onChangeText(e)} className='textInput' />
                          </div>

                           <div className="inputDiv">
                                <label htmlFor="cpassword"> <CiLock size={18} /> </label>
                                <input name='cpassword' type='password' security='hloe' placeholder='comfirm password' value={formData.cpassword}  onChange={(e) => onChangeText(e)} className='textInput' />
                           </div>

                            <button className="formLoginBtn" type='submit' >
                                Register <CiLogin />
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

export default Register