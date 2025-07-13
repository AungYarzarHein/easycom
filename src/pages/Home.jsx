import React, { useEffect, useState } from 'react'
import IntroCard from '../components/IntroCard';
import TextAnimation from '../components/TextAnimation';
import MarketingAnimation from '../components/MarketingAnimation';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';


const Home = () => {
 
  return (
    <div className="container">
     
      <IntroCard />
     <TextAnimation />
      <div className="carouselDiv">
        <ProductGrid categoryName={"smartphones"} key={"smartphones"} />
      </div>

      <MarketingAnimation />

     
    

     <Footer />
    </div>
  )
}

export default Home