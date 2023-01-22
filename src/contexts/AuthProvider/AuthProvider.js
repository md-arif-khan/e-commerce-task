import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext=createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const provider = new GoogleAuthProvider();
    // Sing Up with google
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // create new user with email and password
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //   update user name 
    const updateDisplayName=(name)=>{
        return updateProfile(auth.currentUser,{displayName:name})
    }
    // login email and password
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe
        }
    },[])

    const authInfo={user,loading,createUser,googleSignIn,updateDisplayName,login,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;