import React from 'react';
import { CiTrash , CiEdit } from "react-icons/ci";

const CartItem = ({obj}) => {
    const priceForOne = obj.price * (obj.discountPercentage/100) ; 
    const totalPrice = priceForOne * obj.nam ;
  return (
    <div className="cartItem">
        <div className="cImageDiv">
            <img alt='cartImage' src={obj.thumbnail} className='cImage' />
        </div>

        <div className="cartInfo">
            <div className="cartTitle"> {obj.title} </div>
            <div className="cartCal">
                  {priceForOne.toFixed(2)} &times; {obj.nam} = {totalPrice.toFixed(2)} $
            </div>
        </div>

        <div className="editDelete">
                <CiEdit className='cIcon' />
                <CiTrash className='cIcon' />
        </div>
    </div>
  )
}

export default CartItem