import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
    const [loading , setLoading] = useState(true);
    const cartData = useSelector(state => state.cart.cart);
    // console.log(cartData);



    useEffect(()=> { 
        setTimeout(()=>{ 
            setLoading(false);
         } ,500)
     } ,[])

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
                <button className="checkOutBtn"> Check Out </button>
               </div>
            </div>
        </div>
    )
}

export default Cart