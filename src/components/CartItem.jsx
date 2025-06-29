import React from 'react';
import { CiTrash , CiEdit } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCart, subCartTotal } from '../features/cartSlice';

const CartItem = ({obj}) => {
  const priceForOne = obj.price - (obj.price * (obj.discountPercentage / 100)) ; 
    const totalPrice = priceForOne * obj.nam ;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onEditItem  = () => {
      navigate(`/products/${obj.id}`, { state: obj })
    };

    const onDeleteItem = () => {
      dispatch(deleteCart(obj));
    }

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
                <CiEdit className='cIcon' onClick={onEditItem} />
                <CiTrash className='cIcon' onClick={onDeleteItem} />
        </div>
    </div>
  )
}

export default CartItem