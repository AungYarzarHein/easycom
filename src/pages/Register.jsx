import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiLock, CiUser, CiMail, CiLogin } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        cpassword:""
    })

    const onChangeText = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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
                        <form className='form' >
                            <h3 className='gradientText' >Registeration Form</h3>
                            <div style={{ marginBottom: "1rem" }} >
                                <span>Already have an account?</span> <span className="signup" onClick={() => navigate("/login")} >Login</span>
                            </div>

                            <div className="inputDiv">
                                <label htmlFor="username"> <CiUser size={18} />  </label>
                                <input name='username' type='text' placeholder='username' value={formData.username} onChange={(e) => onChangeText(e)} className='textInput' />
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
                                <input name='cpassword' type='password' security='hloe' placeholder='comfirm password' value={formData.cpassword} onChange={(e) => onChangeText(e)} className='textInput' />
                           </div>

                            <button className="formLoginBtn">
                                Register <CiLogin />
                            </button>

                            <span>Or</span>


                        </form>

                        <button className="googleSignInBtn">
                            <FcGoogle />   Sign In With Google
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Register