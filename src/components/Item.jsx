import React from 'react'

const Item = ({obj}) => {
  return (
    <div className="item">
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