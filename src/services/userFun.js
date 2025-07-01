import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../firebase";


export const signInWithEpass = async (userEmail,password) => {

    try {

        const result = await signInWithEmailAndPassword(auth , userEmail,password);
        const { photoURL , displayName , uid , email , emailVerified , phoneNumber } = result.user ;
        // console.log(result.user.providerData,result.user.)
        return { photoURL, displayName, uid, email, emailVerified, phoneNumber };
        
    } catch (error) {
        console.log(error)
    }
}

export const signUpWithEpass = async (userEmail, password , name) => {

    try {

        const result = await createUserWithEmailAndPassword(auth, userEmail, password);
        await updateProfile(result.user,{displayName:name});
        const { photoURL, displayName, uid, email, emailVerified , phoneNumber } = result.user;
        // console.log(result);
        return { photoURL, displayName, uid, email, emailVerified, phoneNumber };

    } catch (error) {
        console.log(error)
    }
}


export const signInWithGoogle = async () => {

    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth , provider);
        const { photoURL, displayName, uid, email, emailVerified, phoneNumber } = result.user;
        return { photoURL, displayName, uid, email, emailVerified, phoneNumber };


    } catch (error) {
        console.log(error);
    }
}


export const saveUserData = (data) => {
    
}







