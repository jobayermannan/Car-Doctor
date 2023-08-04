import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

 export const AuthContext=createContext();
const auth = getAuth(app)



const AuthProvider = ({children}) => {

    const  [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider= new GoogleAuthProvider();
    



    const createUser=(email,password)=>{
        setLoading(true);
       
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const singUser=(email,password)=>{
        setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
      return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
     const unSubsCribe=  onAuthStateChanged(auth, currentUser=>  {
            setUser(currentUser)
            // console.log("current user: " ,currentUser)
            setLoading(false)

            if (currentUser && currentUser.email){

              const user ={
                email:currentUser.email
              }
              fetch('https://car-doctor-server-jobayermannan.vercel.app/jwt',{
              method: 'POST',
              headers:{
                'content-type': 'application/json',
              },
              body: JSON.stringify(user)
            }).then(res=> res.json()).then(data=>{console.log(data)
                //  warning: not a best place to save jwt token local storage
                localStorage.setItem('car-token',data.token)
                
            
            })
            } else{
              localStorage.removeItem('car-token')
            }
        })
        return ()=>{
           return unSubsCribe()
        }
    },[])

     const logOut= ()=>{
        setLoading(true)
        return signOut(auth)
     }

    const authInfo={
      user,
      loading,createUser,singUser,logOut,googleSignIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;