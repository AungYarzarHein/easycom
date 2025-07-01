import { collection, doc, getDocs, query, serverTimestamp, setDoc, where } from "firebase/firestore";
import { v4 as orderId } from "uuid";
import { auth, firestore } from "../firebase.js";
import { toast } from "react-toastify";

export const orderNow = async (orderObj , cb) => {
   const docId = orderId();
   const orderData = {
    ...orderObj,
    orderId:docId,
    timestamp:serverTimestamp()
   }

   console.log(orderData,auth.currentUser.uid)

    const orderNowPromise = setDoc(doc(firestore, "easy-orders", docId), orderData);

    toast.promise(orderNowPromise,{
        pending:"Ordering...",
        success:"Order completed",
        error:"order not completed"
    })

   try {
    await orderNowPromise ;
    cb()
   } catch (error) {
    console.log(error)
   }
}





export const getOrderHistory = async (id) => {
    const q = query(collection(firestore,"easy-orders"),where("userId","==",id)) ;
    const snapshot = await getDocs(q);
    const orderList = snapshot.docs.map(item => item.data());
    
    return orderList ;
}