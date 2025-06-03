import React from 'react';
import girl from "../assets/girlshop.svg";
import boy from "../assets/boy.svg";
import { motion } from "motion/react";


const MarketingAnimation = () => {
  return (
    
          <div className="marketingContainer">

              <div className="girlDiv">
<<<<<<< HEAD
                  <motion.img initial={{opacity:0,translateY:"50px"}} whileInView={{opacity:1,translateY:0}} transition={{duration:1,delay:.5}} src={girl} className='girlImage' alt='image'  />
=======
                  <motion.img initial={{opacity:0,translateY:"50px"}} whileInView={{opacity:1,translateY:0}} transition={{duration:1,delay:.5}} src={girl} className='girlImage' />
>>>>>>> 6d4c5869126a9f7d44cfd2cf52e409e693c4ae74
              </div>

              <div className="textDiv">
                  Get Everything in one place
              </div>
             
          </div>

  
  )
}

export default MarketingAnimation