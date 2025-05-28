import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';



const ProductCarousel = () => {
     const [products,setProducts] = useState([]);
     const [loading,setLoading] = useState(true);
        

    useEffect(() => { 
        fetch('https://dummyjson.com/products?limit=10&skip=10')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
                console.log(data)
            });
     } ,[])

    if (loading) {
        return (
            <div className="introContainer">
                <div className="loading">Loading...</div>
            </div>
        )
    }


  return (
    <div className="carouselContainer">
        <div className="btnContainer">
              <button className="seeAllBtn"> See All </button>
              <button className="seeAllBtn"> See All </button>
        </div>
       <Swiper
       slidesPerView={"auto"}
    //    centeredSlides={true}
       modules={[Pagination,Autoplay]}
    //    spaceBetween={10}
       pagination={{clickable:true}}
       className='mySwiper'
       autoplay={{delay:4000}}
       breakpoints={{
        300:{spaceBetween:5},
        600:{spaceBetween:10}
       }}
        >
 {
    products.map(item => <SwiperSlide key={item.id} > <ProductCard obj={item} /> </SwiperSlide>)
 }
       </Swiper>
    </div>
  )
}

export default ProductCarousel