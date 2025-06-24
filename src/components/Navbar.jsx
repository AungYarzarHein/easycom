import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiAlignCenter , FiX } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { resetUserData } from '../features/userSlice';


const Navbar = ({user}) => {
  const [show , setShow] = useState(false);
  const dispatch = useDispatch();
  // const [login,setLogin] = useState(false);
  const navigate = useNavigate();
  // const userData = useSelector(state => state.userData)

  const onClickHandler = () => {
    setShow(!show)
  }

  const onChangePage = (routeName) => {
    navigate(routeName);
    setShow(!show);
  }


  const LogInOutHandler = async () => {
    if(user){
      await signOut(auth);
      dispatch(resetUserData());
      navigate("/login");
    }else{
      navigate("/login")
    }
  }


  // useEffect(()=> {
  //   console.log(userData, "Hello Friends")
  //   if(userData.email){
  //     setLogin(true);
  //   }
  // } ,[])

  return (
    <div className="navbar">
        <div className="navHeader"  >
        <button className="navHeaderText gradientText" onClick={() => navigate("/")} > EasyCom</button>
        </div>

      

        <div className='iconDiv' >
        {show ? <FiX className='icon' onClick={onClickHandler} /> : <FiAlignCenter className='icon' onClick={onClickHandler} />} 

        </div>
        <div className={show ? "menubar show" : "menubar"} >
          <span className="menuItem" onClick={() => onChangePage("products")} > Profile </span>
          <span className="menuItem" onClick={() => onChangePage("products")} > Products </span>
          <span className="menuItem"> Carts </span>
          <span className="menuItem" onClick={LogInOutHandler} > 
            {
              user ? "Log out" : "log in"
            }
           </span>
        </div>
    </div>
  )
}

export default Navbar