import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
    const [loading , setLoading] = useState(true);
    const cartData = useSelector(state => state.cart.cart);
    const cartLength = useSelector(state => state.cart.cartTotal);
    const [totalPrice , setTotalPrice] = useState(0);
    // console.log(cartData);



    useEffect(()=> { 
        
           
            const totalP = cartData.reduce((total,item)=> { 
                return total += (item.price - (item.price * (item.discountPercentage/100))) * item.nam ;
             } ,0)

             setTotalPrice(totalP);
            
        
        setTimeout(()=>{ 
            setLoading(false);
         } ,500)
     } ,[cartData])

  if(loading){
      return (
          <div className="loading">
              <div className="spinner"></div>
          </div>
      )
  }


    return (
        <div className="container" style={{paddingTop:"70px"}} >
            <div className="cartContainer">
               <div className="cartItemContainer">
                    {
                        cartData.map(obj => <CartItem obj={obj} key={obj.id} />)
                    }
               </div>

               <div className="checkOut">
                <span className="totalPrice gradientText"> Total -  {totalPrice.toFixed(3)} $ </span>
                <button className="checkOutBtn"> Check Out </button>
               </div>
            </div>
        </div>
    )
}

export default Cart