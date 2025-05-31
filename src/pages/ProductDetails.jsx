import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Reviews from '../components/Reviews';
import { FaCartPlus } from "react-icons/fa";
import { FaPlus , FaMinus } from "react-icons/fa6";

const NumOfItem = ({price,addToCart,normalPrice}) => {

  const [nam , setNam] = useState(1);

  const onIncrease = () => {
    setNam(prev => prev + 1)
  }

  const onReduce = () => {
    if(nam > 1) {
      setNam(prev => prev -1)
    }
  }


  useEffect(() => {
     window.scrollTo(0,0)
  },[])

  return(

    <>

     <div className="dPrice"> 
            <span className="dOldPrice"> {(normalPrice * nam).toFixed(2)} $ </span>
            <span className="dNewPrice"> {(price * nam).toFixed(2)} $ </span>
      </div>

      <div className="dBtns">
        <button className="dBtn" onClick={onReduce} > <FaMinus /> </button>
        <button className="dBtn"> {nam} </button>
        <button className="dBtn" onClick={onIncrease}> <FaPlus /> </button>
      </div>

      <div className="dBtns" onClick={addToCart} >
        <button className="addCart"> <FaCartPlus className='addCartIcon' /> <span className='addCartText' > Add To Cart </span> </button>
      </div>
    
    </>
  
  )
}

const ProductDetails = () => {
  const {id} = useParams();
  const data = useLocation();
  const actualPrice = data.state.price - (data.state.price * (data.state.discountPercentage /100)) ;

  console.log(id , data.state);

  const obj = data.state ;

  
  return (
    <div className="container">
        <div className="detailsContainer">
          <div className="dImageDiv">
            <img src={data.state.images[0]} className='dImage' alt='image' />
          </div>

          <div className="dInfoDiv">
           
          <NumOfItem price={actualPrice} addToCart={() => console.log("Add to cart")} normalPrice={data.state.price} />
         

        

            <span className="dItemName gradientText"> {data.state.title} </span>
            <p className="dDescription"> {data.state.description} </p>
          </div>


          <Reviews arr={obj.reviews} />

        
        </div>
    </div>
  )
}

export default ProductDetails