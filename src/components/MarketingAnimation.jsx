import React from 'react';
import girl from "../assets/girlshop.svg";
import boy from "../assets/boy.svg";
import { motion } from "motion/react";


const MarketingAnimation = () => {
  return (
    <>
          <div className="marketingContainer">

              <div className="girlDiv">
                  <motion.img initial={{translateX:"-100%",opacity:0}} whileInView={{translateX:0,opacity:1}} transition={{duration:1,delay:.5}} src={boy} className='boyImage' />
              </div>
              <div className="textDiv">
                  Your Boyfriend dont need to do anything
              </div>
              <div className="girlDiv">
                  <motion.img src={girl} initial={{ translateX: "100%", opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} transition={{ duration: 1,delay:.5 }} className='girlImage' />
              </div>
          </div>

          <div className="smTextDiv">
              Your Boyfriend dont need to do anything
          </div>
    </>
  )
}

export default MarketingAnimation