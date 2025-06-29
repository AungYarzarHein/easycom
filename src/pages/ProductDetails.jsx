import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Reviews from '../components/Reviews';
import { FaCartPlus } from "react-icons/fa";
import { FaPlus , FaMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addCartTotal, subCartTotal } from '../features/cartSlice';

const NumOfItem = ({price,addToCart,normalPrice,itemNam}) => {

  const [nam , setNam] = useState(itemNam);
  const dispatch = useDispatch();

  // console.log(itemNam , "from button")

  const onIncrease = () => {
    if(nam == 0){
      setNam(2);
      dispatch(addCartTotal(2));
      return ;
    }
    dispatch(addCartTotal(1));
    setNam(prev => prev + 1)
   
  }

  const onReduce = () => {
    if(nam > 0) {
      setNam(prev => prev -1);
      dispatch(subCartTotal(1))
    }
  }


  const onCartAdd = (nam) => {
    if(nam == 0){
      setNam(1);
      dispatch(addCartTotal(1));
      addToCart(1);
      return ;
    }else if(nam >= 1){
      addToCart(nam);
    }

    
  }


 

  return(

    <>

     <div className="dPrice"> 
            <span className="dOldPrice"> {(normalPrice * (nam > 0 ? nam : 1)).toFixed(2)} $ </span>
        <span className="dNewPrice"> {(price * (nam > 0 ? nam : 1)).toFixed(2)} $ </span>
      </div>

      <div className="dBtns">
        <button className="dBtn" onClick={onReduce} > <FaMinus /> </button>
        <button className="dBtn"> {nam == 0 ? 1 : nam} </button>
        <button className="dBtn" onClick={onIncrease}> <FaPlus /> </button>
      </div>

      <div className="dBtns" onClick={()=>onCartAdd(nam)} >
        <button className="addCart"> <FaCartPlus className='addCartIcon' /> <span className='addCartText' > Add To Cart </span> </button>
      </div>
    
    </>
  
  )
}

const ProductDetails = () => {
  const {id} = useParams();
  const cartData = useSelector(state => state.cart.cart);
  const prevData = cartData.find(obj => obj.id == id) ;
  const [data , setData] = useState({});
  const [loading,setLoading] = useState(true);
  const defaultData =  useLocation().state;
  const actualPrice = data.price - (data.price * (data.discountPercentage /100)) ;
  const dispatch = useDispatch();



  const addToCart = (nam) => {
    // console.log(nam, "is from children")
    // if(nam ==0){
    //   dispatch(addCartTotal(1));
    //   dispatch(addCart({ ...data, nam:1 }))
    // }else{
      // console.log("updating...")
    
        dispatch(addCart({ ...data, nam: nam }));
      
    // }
   
  }

  

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(prevData);
    // setData(defaultData);
    if(prevData){
      // console.log("With Prev data",prevData.nam)
      setData(prevData);
      setLoading(false);
    }else{
      // console.log("With deFault data", defaultData.nam)
      setData(defaultData);
      setLoading(false);
    }
  }, [])


  if(loading){
    return (
      <div className="loading"> <div className="spinner"></div> </div>
    )
  }

  
  return (
    <div className="container">
        <div className="detailsContainer">
          <div className="dImageDiv">
            <img src={data.images[0]} className='dImage' alt='image' />
          </div>

          <div className="dInfoDiv">
           
          <NumOfItem price={actualPrice} addToCart={addToCart} normalPrice={data.price} itemNam={data.nam} />
         

        

            <span className="dItemName gradientText"> {data.title} </span>
            <p className="dDescription"> {data.description} </p>
          </div>


          <Reviews arr={data.reviews} />

        
        </div>
    </div>
  )
}

export default ProductDetails