import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, 
    signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
     GithubAuthProvider, updateProfile } from "firebase/auth";

import app from "./firebase.init";
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
     const provider=new GoogleAuthProvider()
     const gitProvider=new GithubAuthProvider()
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
      }
      const LogIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
      }
    const googleLogIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
      }
      const gitHubLogIn=()=>{
        setLoading(true)
       return signInWithPopup(auth,gitProvider)
      }
      const updateUserProfile=(name,photo)=>{
     return   updateProfile(auth.currentUser, {
          displayName: name, 
          photoURL: photo
       
       })}

       const logOut=()=>{
        setUser(null)
        return signOut(auth)
      }
       useEffect(()=>{
        const unsubsCribe=onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser);
            setLoading(false)
            setUser(currentUser)
        })
        return()=>{
            unsubsCribe()
        }
       },[])
       const userInfo={
        user,
        createUser,
        LogIn,
        googleLogIn,
        gitHubLogIn,
        updateUserProfile,
        logOut,
        loading
    }
    return (
         <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;