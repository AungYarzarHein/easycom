import React from 'react'

const ProductCard = ({obj}) => {
    // console.log(obj)
  return (
    <div className="productCard">

        <img src={obj.images[0]} alt='image' className='productImage' loading='lazy' />
        <span className='productPrice' > {obj.price} &#36; </span>
        <span className='productTitle' > {obj.title} </span>
      
    </div>
  )
}

export default ProductCard