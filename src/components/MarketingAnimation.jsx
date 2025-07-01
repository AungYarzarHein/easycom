import React from 'react';
import prize from "../assets/prize.svg";
import { motion } from "motion/react";


const MarketingAnimation = () => {
  return (
    
          <div className="marketingContainer">

            <h3 className='gradientText' > Big Surprise is waiting for you </h3>
            
            <div className="marketDiv">
              <div className="marketingDiv">
                  <motion.img initial={{scale:0.7}} whileInView={{scale:1}} transition={{duration:1}} src={prize} alt='image' className='marketImage' />
              </div>

              <div className="marketingDiv" >
          <motion.button initial={{ translateX:-100 }} whileInView={{ translateX:0 }} transition={{  duration: .5 }} className="signIn"> Buy Now </motion.button>
          <motion.button initial={{ translateX: 100 }} whileInView={{ translateX:0 }} transition={{  duration: .5 }} className="register"> Register Now </motion.button>
                  
              </div>
            </div>
          </div>

  
  )
}

export default MarketingAnimation