import React from 'react'
import { useSelector } from 'react-redux'
import { getOrderHistory } from '../services/orderFun'

const Profile = () => {

  const userData = useSelector(state => state.userData.user)

  const getOrders = async () => {
        const data = await getOrderHistory(userData.uid);
        console.log(data);
  }

  getOrders(userData.uid);


  return (
    <div className="container" style={{paddingTop:"60px"}} >
        
    </div>
  )
}

export default Profile