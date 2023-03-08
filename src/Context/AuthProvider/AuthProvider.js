import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import app from '../../Firebase/firebse.config'
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null);
   const [loader,setLoader]=useState(true)

    const providerLogin =  provider=>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }
    const loginEmailWithPass = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailPass = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const profileUpdeteUser =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const userVrifying =()=>{
        return sendEmailVerification(auth.currentUser)
    }
    const logOut =()=>{
        setLoader(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            
            if(currentUser===null||currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoader(false)
        })
        return ()=> unsubscribe();
    },[])

    // const user = {displayName:'akram'};
    const authInfo = {user,loader,setLoader,userVrifying, profileUpdeteUser, providerLogin,logOut,loginEmailWithPass,signInEmailPass}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;