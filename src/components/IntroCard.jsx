import React,{useEffect , useRef, useState} from 'react';
import { GrNext , GrPrevious } from "react-icons/gr";
import {  animate, easeOut, motion,  } from "motion/react";


const IntroCard = () => {
    const [products,setProducts] = useState([]);
      const [loading,setLoading] = useState(true);
      const [count,setCount] = useState(0);
      const imgRef = useRef(null);
    
    
      useEffect(() => {
        fetch("https://dummyjson.com/products?limit=10&skip=30")
          .then(res => res.json())
          .then(data => {
            setProducts(data.products);
            setLoading(false);
            // console.log(data , count);
            
          });
    
      } ,[count])

      const nextItem = () => {
        if(count < 9){
          setCount(prev => prev + 1)
        }else {
          setCount(0);
        }
      } ;
      const prevItem = () => {
        if(count > 0){
          setCount(prev => prev -1)
        }
      }

      
    
    
      if(loading) {
        return (
          <div className="introContainer">
                <div className="loading">Loading...</div>
          </div>
        )
      }
    



  return (
    <div className="introContainer">
        <div className="introDescription">
          <motion.span initial={{translateX:"50px",opacity:0}} animate={{translateX:0,opacity:1}} transition={{delay:.3,duration:1}} className='introT' key={`${count}title`} > {products[count].title} </motion.span>
        <motion.p initial={{ translateX: "-50px",opacity:0 }} animate={{ translateX: 0 ,opacity:1 }} transition={{ duration: 1,delay:.3 }} key={count} className='introD' > {products[count].description} </motion.p>
        </div>

        <div className="introImageCard">
        <motion.img src={products[count].images[0]} ref={imgRef} className='introImage' initial={{ scale: .6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .5, delay: .3 }} key={`${count}img`} alt='introImage' loading='lazy' />
            <div className="nextBtns">
              <GrPrevious className='prevBtn' onClick={prevItem} />
              <GrNext className='nextBtn' onClick={nextItem} />
            </div>
        </div>
    </div>
  )
}

export default IntroCard