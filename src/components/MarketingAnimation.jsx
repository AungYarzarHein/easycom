import React from 'react';
import prize from "../assets/prize.svg";
import { motion } from "motion/react";


const MarketingAnimation = () => {
  return (
    
          <div className="marketingContainer">

            <h3 className='gradientText' > Big Surprise is waiting for you </h3>
            
            <div className="marketDiv">
              <div className="marketingDiv">
                  <motion.img initial={{scale:0.7}} whileInView={{scale:1}} transition={{delay:.3,duration:.5}} src={prize} alt='image' className='marketImage' />
              </div>

              <motion.div className="marketingDiv" initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ delay: .3, duration: .5 }} >
                  <button  className="signIn"> Buy Now </button>
                  <button className="register"> Register </button>
              </motion.div>
            </div>
          </div>

  
  )
}

export default MarketingAnimation