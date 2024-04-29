import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, 
    signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
     GithubAuthProvider, updateProfile } from "firebase/auth";

import app from "./firebase.init";
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const auth=getAuth(app)
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
    const userInfo={
        user,
        createUser,
        LogIn,
    }
    return (
         <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;