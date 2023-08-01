import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';

 export const AuthContext=createContext();
const auth = getAuth(app)



const AuthProvider = ({children}) => {

    const  [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    



    const createUser=(email,password)=>{
        setLoading(true);
       
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const singUser=(email,password)=>{
        setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
     const unSubsCribe=  onAuthStateChanged(auth, currentUser=>  {
            setUser(currentUser)
            console.log("current user: " ,currentUser)
            setLoading(false)
        })
        return ()=>{
           return unSubsCribe()
        }
    },[])

    const authInfo={
      user,
      loading,createUser,singUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;