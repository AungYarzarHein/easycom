import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import Item from '../components/Item';

const ProductList = () => {
  const [products , setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [currentCount,setCurrentCount] = useState(1);


  useEffect(() => { 
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false)
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
    <div className="container">
      <div className="itemGridContainer">

      <div className="paginationBtn">
        <button className="pagiBtn"> Prev </button>
        <div className="pagiIndicator">
          {currentCount > 3 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 3)}  > {currentCount - 3} </button>}
          {currentCount > 2 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 2)}  > {currentCount - 2} </button> }
          {currentCount > 1 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 1)} > {currentCount - 1} </button>}
          <button className="pagiIndicatorBtn currentCount"> {currentCount} </button>
          <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev + 1)} > {currentCount + 1} </button>
          <button className="pagiIndicatorBtn" onClick={()=> setCurrentCount(prev => prev+2)} > {currentCount + 2} </button>
          <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev + 3)} > {currentCount + 3} </button>
        </div>
        <button className="pagiBtn"> Next </button>
      </div>
      
         {
          products.map(item => <Item obj={item} key={item.id} />)
         }



        <div className="paginationBtn">
          <button className="pagiBtn"> Prev </button>
          <div className="pagiIndicator">
            {currentCount > 3 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 3)}  > {currentCount - 3} </button>}
            {currentCount > 2 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 2)}  > {currentCount - 2} </button>}
            {currentCount > 1 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 1)} > {currentCount - 1} </button>}
            <button className="pagiIndicatorBtn currentCount"> {currentCount} </button>
            <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev + 1)} > {currentCount + 1} </button>
            <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev + 2)} > {currentCount + 2} </button>
            <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev + 3)} > {currentCount + 3} </button>
          </div>
          <button className="pagiBtn"> Next </button>
        </div>
      </div>
    </div>
  )
}

export default ProductList