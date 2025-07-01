import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import Item from '../components/Item';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { saveCurrentCount } from '../features/appStateSlice';

const ProductList = () => {
  // const [products , setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const countData = useSelector((state) => state.currentCount.count);
  const cartData = useSelector(state => state.cart.cart);
  const userData = useSelector(state => state.userData.user);
  const [currentCount, setCurrentCount] = useState(countData);
  const [show , setShow] = useState(false) ; // category selector
  const [products , setProducts] = useState('') // for category api
  const dispatch = useDispatch();

  

 


const fetchData = async (count) => {
  const skip = 30 * count ;
  const res = products ? await fetch(`https://dummyjson.com/products/category/${products}`) : await fetch(`https://dummyjson.com/products?skip=${skip}`) ;
  const data = await res.json();
  // setProducts(data.products);
  return data.products ;
}

  const { data , isLoading } = useQuery({
    queryKey: ["products",currentCount,products],
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
        <div className="spinner"></div>
      </div>
    )
  }


  const onChangeCategory = (name) => {
      setProducts(name);
      setCurrentCount(1);
  }


  return (
    <div className="container" style={{paddingTop:"70px"}} >
      <div className="categoryContainer">
       <button className="categorySelector" onClick={()=>setShow(!show)} > Filter By Category </button>
        <div className={show ? "cateOverlay showCategory " : "cateOverlay"} onClick={()=>setShow(false)} >
        <div className="categoryItemWrapper">
            <button className="categoryItem" onClick={() => setProducts("")}  > All </button>
            <button className="categoryItem" onClick={() => onChangeCategory("smartphones")}  > smartphones </button>
            <button className="categoryItem" onClick={() => onChangeCategory("beauty")}  > beauty </button>
            <button className="categoryItem" onClick={() => onChangeCategory("mens-shoes")}  > mens-shoes </button>
            <button className="categoryItem" onClick={() => onChangeCategory("kitchen-accessories")}  > kitchen-accessories </button>
            <button className="categoryItem" onClick={() => onChangeCategory("laptops")}  > laptops </button>
            <button className="categoryItem" onClick={() => onChangeCategory("mens-shirts")}  > mens-shirts </button>
            <button className="categoryItem" onClick={() => onChangeCategory("groceries")}  > groceries </button>
        </div>
       </div>
       {/* <button className="filterBtn"> Filter </button> */}
      </div>
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