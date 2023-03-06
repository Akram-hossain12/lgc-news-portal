import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../Firebase/firebse.config'
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null);

    const providerLogin =  provider=>{
        return signInWithPopup(auth,provider)
    }
    const loginEmailWithPass = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInEmailPass = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return ()=> unsubscribe();
    },[])

    // const user = {displayName:'akram'};
    const authInfo = {user,providerLogin,logOut,loginEmailWithPass,signInEmailPass}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;