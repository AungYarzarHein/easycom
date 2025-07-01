import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getOrderHistory } from '../services/orderFun';
import { FaUserCircle , FaUser , FaMailchimp, FaMailBulk, FaPhone, FaCcVisa, FaCcAmazonPay, FaCcApplePay, FaCcPaypal } from "react-icons/fa";
import { CiLock, CiUser, CiMail, CiLogin } from "react-icons/ci";


const Profile = () => {

  const userData = useSelector(state => state.userData.user);
  const [order , setOrder] = useState(null);
  const [loading , setLoading] = useState(true);
 

  const getOrders = async () => {
        const data = await getOrderHistory(userData.uid);
        setOrder(data);
        setLoading(false);
        // console.log(data);
  }

  // getOrders(userData.uid);

  // console.log(userData)

  useEffect(()=> {
   getOrders(userData.uid)
  } ,[])

  return (
    <div className="container" style={{paddingTop:"60px"}} >
        <div className="profileContainer">
          <div className="pHeader">
            <div className="pImageDiv">
              {
                userData.photoURL ? <img src={userData.photoURL} alt='profile' className='profileImage' /> : <FaUserCircle className='profileImageAlt' />
              }
            </div>

            <div className="pInfoDiv">
              <div className="pInfoItem">
                <FaUser className='pIcon' />
                <span className="pUserName"> { userData.displayName ? userData.displayName : "Your Name" } </span>
              </div>

              <div className="pInfoItem">
                <FaMailBulk className='pIcon' />
                <span className="pUserName"> {userData.email} </span>
              </div>

              <div className="pInfoItem">
                <FaPhone className='pIcon' />
              <span className="pUserName"> {userData.phoneNumber ? userData.phoneNumber : "09545 454 343"} </span>
              </div>


            </div>

            <div className="walletDiv">
              <div className="walletInfo">
                 <h3 className='gradientText' > 1200 $ </h3>
                 <span> Your Balance </span>
              </div>

              <div className="totalPurchase">
                 <h3 className='gradientText' > 12 </h3>
                 <span> Total Purchase </span>
              </div>
            </div>

            <div className="topUpDiv">
              <h3 className='gradientText' > Top Up Now </h3>
              <div className="topUpItems">
                <button className="topUpBtn"> <FaCcVisa className='topUpIcon' /> </button>
                <button className="topUpBtn"> <FaCcAmazonPay className='topUpIcon' /> </button>
                <button className="topUpBtn"> <FaCcApplePay className='topUpIcon' /> </button>
                <button className="topUpBtn"> <FaCcPaypal className='topUpIcon' /> </button>
              </div>
            </div>

            
          </div>

          <div className="pData">
             <h3 className='gradientText' >Order History</h3>
            {
            loading ? (<div  style={{alignSelf:"center",paddingTop:"3rem"}} ><div className='spinner' ></div></div>) : (<div className="orderHistory">
             {
                order.map(item => (<div className="orderHItem" key={item.orderId} >
                  <div className="orderHHeader">
                    <span className="OTotalPrice gradientText"> {item.totalPrice} $ </span>
                    <span className="orderDate"> {new Date(item.timestamp.seconds * 1000).toLocaleDateString()} </span>
                  </div>
                  <span className="orderId"> {item.orderId}</span>

                </div>))
             }
            </div>)
            }
          </div>
        </div>
    </div>
  )
}

export default Profile