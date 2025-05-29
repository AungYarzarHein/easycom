import React from 'react';
import girl from "../assets/girlshop.svg";
import boy from "../assets/boy.svg";
import { motion } from "motion/react";


const MarketingAnimation = () => {
  return (
    <>
          <div className="marketingContainer">

              <div className="girlDiv">
                  <motion.img initial={{opacity:0,translateY:"50px"}} whileInView={{opacity:1,translateY:0}} transition={{duration:1,delay:.5}} src={boy} className='boyImage' />
              </div>
              <div className="textDiv">
                  Your Boyfriend dont need to do anything
              </div>
              <div className="girlDiv">
                  <motion.img src={girl} initial={{ opacity: 0,translateY:"50px" }} whileInView={{  opacity: 1 ,translateY:0 }} transition={{ duration: 1,delay:.5 }} className='girlImage' />
              </div>
          </div>

          <div className="smTextDiv">
              Your Boyfriend dont need to do anything
          </div>
    </>
  )
}

export default MarketingAnimation