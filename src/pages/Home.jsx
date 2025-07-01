import React, { useEffect, useState } from 'react'
import IntroCard from '../components/IntroCard';
import TextAnimation from '../components/TextAnimation';
import ProductCarousel from '../components/ProductCarousel';
import MarketingAnimation from '../components/MarketingAnimation';
import Footer from '../components/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUserData } from '../features/userSlice';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';


const Home = () => {
 
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  //  useEffect(()=> { 
  //         const unSub = onAuthStateChanged(auth,(user) => {
  //             if(user){
  //                 // console.log(user.providerData[0])
  //                 const data = user.providerData[0] ;
  //                 dispatch(updateUserData(data));
  //                 navigate("/")
  //             }else{
                
  //             }
  //         });
  
  //         return unSub ;
  //      } ,[])


  return (
    <div className="container">
      {/* <Navbar /> */}
      <IntroCard />
     <TextAnimation />
      <div className="carouselDiv">
        <ProductGrid categoryName={"smartphones"} key={"smartphones"} />
      </div>

      {/* <div className="carouselDiv">
        <ProductGrid categoryName={"groceries"} key={"groceries"} />
      </div> */}

      <MarketingAnimation />

     
    

     <Footer />
    </div>
  )
}

export default Home