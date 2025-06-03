import React from 'react'

const ProductCard = ({obj}) => {
    // console.log(obj)
  return (
    <div className="productCard">

<<<<<<< HEAD
        <img src={obj.images[0]} alt='image' className='productImage' loading='lazy' />
=======
        <img src={obj.images[0]} alt='image' className='productImage' />
>>>>>>> 6d4c5869126a9f7d44cfd2cf52e409e693c4ae74
        <span className='productPrice' > {obj.price} &#36; </span>
        <span className='productTitle' > {obj.title} </span>
      
    </div>
  )
}

export default ProductCard