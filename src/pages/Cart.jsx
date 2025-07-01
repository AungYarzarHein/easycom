import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { orderNow } from '../services/orderFun';
import { resetCart } from '../features/cartSlice';



const Cart = () => {
    const [loading , setLoading] = useState(true);
    const cartData = useSelector(state => state.cart.cart);
    const userData = useSelector(state => state.userData.user);
    const [totalPrice , setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    // console.log(userData);

    const clearCart = () => {
        dispatch(resetCart())
    }


    const onCheckOut = async () => {
        const arr = cartData.map(item => {
            const { title , nam , price , discountPercentage, id , thumbnail } = item ;
            return {title,nam,price,discountPercentage,id,thumbnail}
        });

        const orderObj = {
            orderValues:arr,
            totalPrice,
            userId:userData.uid
        };

        // console.log(orderData);
        try {
            await orderNow(orderObj , clearCart);
            
        } catch (error) {
            
        }
    }



    useEffect(()=> { 
        
           
            const totalP = cartData.reduce((total,item)=> { 
                return total += (item.price - (item.price * (item.discountPercentage/100))) * item.nam ;
             } ,0)

             setTotalPrice(totalP);
            
        
        setTimeout(()=>{ 
            setLoading(false);
         } ,500)
     } ,[cartData]);


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
                <button className="checkOutBtn" onClick={onCheckOut} > Check Out </button>
               </div>
            </div>
        </div>
    )
}

export default Cart