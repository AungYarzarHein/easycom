import React from 'react';
import StarRating from './StarRating';
import { FaUserCircle } from "react-icons/fa";

const ReviewCard = ({obj}) => {


    return(
        <div className="reviewCard">
            <div className="rUser">
                <FaUserCircle className='rUserIcon' />
                <div className="rUserInfo">
                    <span className="rName"> {obj.reviewerName} </span>
                    <span className="rMail"> {obj.reviewerEmail} </span>
                </div>
            </div>
            <span className="rComment"> {obj.comment} </span>
            {/* <span className="rMail"> {obj.rating} </span> */}
            <StarRating rating={obj.rating} />
        </div>
    )
}

const Reviews = ({arr}) => {
    // console.log(arr)
  return (
    <div className="review">
        {
            arr.map((item,index) => <ReviewCard obj={item} key={index} />)
        }
    </div>
  )
}

export default Reviews