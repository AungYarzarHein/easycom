import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import Item from '../components/Item';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { saveCurrentCount } from '../features/appStateSlice';

const ProductList = () => {
  const [products , setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const countData = useSelector((state) => state.currentCount.count);
  const [currentCount, setCurrentCount] = useState(countData);
  const dispatch = useDispatch();

  // console.log(countData , "Hello fcucking friends")

 


const fetchData = async (count) => {
  const skip = 30 * count ;
  const res = await fetch(`https://dummyjson.com/products?skip=${skip}`) ;
  const data = await res.json();
  // setProducts(data.products);
  return data.products ;
}

  const { data , isLoading } = useQuery({
    queryKey: ["products",currentCount],
    queryFn: () => fetchData(currentCount)
  })


  
  const addCount = (nam) => {
      setCurrentCount(prev => prev + nam)
    // console.log(currentCount, nam, "Hello");
    dispatch(saveCurrentCount(currentCount+nam));
  }

  const subCount = (nam) => {
    if(currentCount <= 1 ){
      return ;
    }
    setCurrentCount(prev => prev -nam);
    // console.log(currentCount , nam , "Hello");
    dispatch(saveCurrentCount(currentCount - nam))
  }

  const onSaveCount = (nam) => {
    console.log("Saving currentCount",nam)
    dispatch(saveCurrentCount(nam));
  }


  useEffect(() => { 
    window.scrollTo(0,0)
    // console.log(currentCount , countData)
   } ,[currentCount])

  if (isLoading) {
    return (
      <div className="loadingDiv">
        <div className="loading">Loading...</div>
      </div>
    )
  }


  return (
    <div className="container">
      <div className="itemGridContainer">

      <div className="paginationBtn">
        <button className="pagiBtn" onClick={() => subCount(1)} > Prev </button>
        <div className="pagiIndicator">
          {currentCount > 3 && <button className="pagiIndicatorBtn" onClick={() => subCount(3)}  > {currentCount - 3} </button>}
          {currentCount > 2 && <button className="pagiIndicatorBtn" onClick={() => subCount(2)}  > {currentCount - 2} </button> }
          {currentCount > 1 && <button className="pagiIndicatorBtn" onClick={() => subCount(1)} > {currentCount - 1} </button>}
          <button className="pagiIndicatorBtn currentCount"> {currentCount} </button>
          <button className="pagiIndicatorBtn" onClick={() => addCount(1) } > {currentCount + 1} </button>
          <button className="pagiIndicatorBtn" onClick={()=> addCount(2) } > {currentCount + 2} </button>
          <button className="pagiIndicatorBtn" onClick={() => addCount(3) } > {currentCount + 3} </button>
        </div>
        <button className="pagiBtn" onClick={() => addCount(1)} > Next </button>
      </div>
      
         {
          data?.map(item => <Item obj={item} key={item.id}  />)
         }



        <div className="paginationBtn">
          <button className="pagiBtn" onClick={()=>subCount(1)} > Prev </button>
          <div className="pagiIndicator">
            {currentCount > 3 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 3)}  > {currentCount - 3} </button>}
            {currentCount > 2 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 2)}  > {currentCount - 2} </button>}
            {currentCount > 1 && <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev - 1)} > {currentCount - 1} </button>}
            <button className="pagiIndicatorBtn currentCount"> {currentCount} </button>
            <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev + 1)} > {currentCount + 1} </button>
            <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev + 2)} > {currentCount + 2} </button>
            <button className="pagiIndicatorBtn" onClick={() => setCurrentCount(prev => prev + 3)} > {currentCount + 3} </button>
          </div>
          <button className="pagiBtn" onClick={()=> addCount(1)} > Next </button>
        </div>
      </div>
    </div>
  )
}

export default ProductList