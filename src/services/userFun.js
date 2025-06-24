import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";


export const signInWithEpass = async (email,password) => {

    try {

        const result = await signInWithEmailAndPassword(email,password);
        return  result.user.providerData[0] ;
        
    } catch (error) {
        console.log(error)
    }
}


export const signInWithGoogle = async () => {

    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth , provider);
        return  result.user.providerData[0];

    } catch (error) {
        console.log(error);
    }
}







