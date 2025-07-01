import React, { useState , useEffect } from 'react'
import ProductCard from './ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/autoplay';
import { Autoplay, Pagination , Grid } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({categoryName}) => {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
            
    
        useEffect(() => { 
            // fetch('https://dummyjson.com/products?limit=10&skip=10')
            fetch(`https://dummyjson.com/products/category/${categoryName}`)
                .then(res => res.json())
                .then(data => {
                    setProducts(data.products);
                    setLoading(false);
                    // console.log(data)
                });
         } ,[])
    
        if (loading) {
            return (
                <div style={{width:"100%",margin:"0 auto"}} >
                    <div className="loading">Loading...</div>
                </div>
            )
        }


  return (
    <div className="carouselContainer">

          <div className="btnContainer">
              <button className="btnLeft gradientText" onClick={() => navigate("/products")}  > {categoryName} </button>
              <button className="seeAllBtn" onClick={() => navigate("/products")} > See All </button>
          </div>
    <Swiper
       slidesPerView={"auto"}
       spaceBetween={10}
    //    pagination={{clickable:true}}
       modules={[Autoplay ]}
       autoplay={{delay:4000}}
       className='customSwiper'
       breakpoints={{
        360:{slidesPerView:2},
        460:{slidesPerView:3},
        560:{slidesPerView:4},
        760:{slidesPerView:5},
        860:{slidesPerView:6},
        // 960:{slidesPerView:7}
       }}
     >
              {/* <SwiperSlide> <div className="productCard"> Hello </div> </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
              <SwiperSlide>Slide 10</SwiperSlide>
              <SwiperSlide>Slide 11</SwiperSlide>
              <SwiperSlide>Slide 12</SwiperSlide>
              <SwiperSlide>Slide 13</SwiperSlide>
              <SwiperSlide>Slide 14</SwiperSlide> */}

              
              {
                  products.map(obj => <SwiperSlide key={obj.id} > <ProductCard obj={obj}  /> </SwiperSlide> )
              }
    </Swiper>
    
      </div>

  )
}

export default ProductGrid