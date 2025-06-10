import React, { useEffect, useState } from 'react'
import IntroCard from '../components/IntroCard';
import TextAnimation from '../components/TextAnimation';
import ProductCarousel from '../components/ProductCarousel';
import MarketingAnimation from '../components/MarketingAnimation';
import Footer from '../components/Footer';


const Home = () => {
 


  return (
    <div className="container">
      <IntroCard />
     <TextAnimation />
      <div className="carouselDiv">
        <ProductCarousel />
      </div>

      <MarketingAnimation />
    

     <Footer />
    </div>
  )
}

export default Home