import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiAlignCenter , FiX } from "react-icons/fi";


const Navbar = () => {
  const [show , setShow] = useState(false);
  const navigate = useNavigate();

  const onClickHandler = () => {
    setShow(!show)
  }

  const onProducts = () => {
    navigate("products");
    setShow(!show);
  }

  return (
    <div className="navbar">
        <div className="navHeader"  >
        <button className="navHeaderText gradientText" onClick={() => navigate("/")} > EasyCom</button>
        </div>

      {show ? <FiX className='icon' onClick={onClickHandler} /> : <FiAlignCenter className='icon' onClick={onClickHandler}  />  } 

        <div className={show ? "menubar show" : "menubar"} >
          <span className="menuItem" onClick={onProducts} > Products </span>
          <span className="menuItem"> Carts </span>
          <span className="menuItem"> Login </span>
        </div>
    </div>
  )
}

export default Navbar