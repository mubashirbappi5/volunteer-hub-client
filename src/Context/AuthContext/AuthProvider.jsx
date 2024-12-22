import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebace/Firebace.init';

export const Authcontext  = createContext()
const AuthProvider = ({children}) => {
    const [user,setuser] =useState(null)
    const provider = new GoogleAuthProvider();
    const googleusers = ()=>{
        return signInWithPopup(auth, provider)
    }
    const usersregister = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const usersLogin = ( email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
           
          console.log(currentUser)
          setuser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }

    },[])
    const userlogout =()=>{
        return signOut(auth)
    }
   

   const name = 'bappi'
   

    const authData={
        name,
        user,
        googleusers,
        usersregister,
        usersLogin,
        userlogout,

    }
    return (
        <Authcontext.Provider value={authData}>
            {children}
            
        </Authcontext.Provider>
    );
};

export default AuthProvider;