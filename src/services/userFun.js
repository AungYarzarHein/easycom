import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";


export const signInWithEpass = async (email,password) => {

    try {

        const result = await signInWithEmailAndPassword(auth , email,password);
        return { ...result.user.providerData[0], emailVerified: result.user.emailVerified };
        
    } catch (error) {
        console.log(error)
    }
}

export const signUpWithEpass = async (email, password) => {

    try {

        const result = await createUserWithEmailAndPassword(auth, email, password);
        // console.log(result);
        return { ...result.user.providerData[0] , emailVerified:result.user.emailVerified};

    } catch (error) {
        console.log(error)
    }
}


export const signInWithGoogle = async () => {

    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth , provider);
        return { ...result.user.providerData[0], emailVerified: result.user.emailVerified };


    } catch (error) {
        console.log(error);
    }
}







