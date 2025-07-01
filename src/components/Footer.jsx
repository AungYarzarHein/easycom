import React, { useEffect, useState } from 'react';
import girl from "../assets/girl.svg";
import { FaFacebookSquare , FaTiktok , FaTelegram , FaInstagram } from "react-icons/fa";



const Footer = () => {
  const [loading , setLoading] = useState(true);
  const [quote , setQuote] = useState(null);

  const getRandomQuote = async () => {

  }

  useEffect(()=> { 
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(data => {
        setQuote(data);
        setLoading(false);
      });

   } ,[])
  return (
   <>
          <div className="footerContainer">
              <div className="footerTextDiv">
                <span className="gradientText footerHeader"> EasyCom </span>
          <div className="socialCard">
            <FaFacebookSquare className='socialIcon' />
            <FaTiktok className='socialIcon' />
            <FaTelegram className='socialIcon' />
            <FaInstagram className='socialIcon' />
          </div>
              </div>

              {/* <div className="footerImageDiv">
                  <img className='footerImage' src={girl} />
              </div> */}

              <div className="footerLinkDiv">
                <span className="gradientText footerHeader"> Quick Links </span>

                  <span>Furniture</span>
                  <span>Beauty</span>
                  <span> Home Decoration </span>
                  <span> Jewellery </span>
                  <span>Groceries</span>
                  <span>Mobine Accessoriess</span>
                  <span>T-Shirts</span>
                
              </div>

              <div className="footerTextDiv">
               <span className="gradientText footerHeader"> Today Advice </span>
               {
                quote && <>
                 <div className="aboutus">
                    {quote.quote}
                </div>

                <div className="author">
                 {quote.author}
                </div>
                </>
               }
              </div>
          </div>

          <div className="copyright">
              &#x00A9; 2025 EasyCom . All Rights Reserved.
          </div>
   </>
  )
}

export default Footer