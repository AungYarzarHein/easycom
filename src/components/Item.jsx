import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Item = ({obj }) => {
  // console.log(obj.id , "is running");

  const navigate = useNavigate();
  const onClickHandler = () => {
    
    navigate(`/products/${obj.id}`, {state:{...obj,nam:0}} )
  }
  return (
    <div className="item" onClick={onClickHandler} >
        <div className="itemImageDiv">
            <img src={obj.images[0]} alt='image' className='itemImage' />
        </div>

        <div className="itemDescription">
            <span className='itemName' > {obj.title} </span>
            <span className="itemPrice"> {obj.price} $ </span>
            <span className="itemRating"> {obj.rating}/5 </span>
        {obj.discountPercentage > 10 ? <span className="discount"> -{obj.discountPercentage}% </span> : null}
        </div>
    </div>
  )
}

export default Item