import React, { useEffect } from 'react'

const ProductList = () => {

  useEffect(() => { 
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(console.log);

   } ,[])
  return (
    <div>ProductList</div>
  )
}

export default ProductList