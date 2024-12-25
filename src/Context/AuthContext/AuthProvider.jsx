import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebace/Firebace.init';
import { Helmet } from 'react-helmet';

export const Authcontext  = createContext()
const AuthProvider = ({children}) => {
    const [user,setuser] =useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const  [loading,setloading] = useState(true);
    const [pagetitle, setpageTitle] = useState('');
    const provider = new GoogleAuthProvider();
    const googleusers = ()=>{
        setloading(true)
        return signInWithPopup(auth, provider)
    }
    const usersregister = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const usersLogin = ( email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Userupdateinfo = (profile)=>{

        return updateProfile(auth.currentUser,profile)

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
           
          console.log(currentUser)
          setuser(currentUser)
          setloading(false)
        })
        return ()=>{
            unsubscribe()
        }

    },[])
    const userlogout =()=>{
        return signOut(auth)
    }
   
    // this is for modal

    const handleModalToggle = () => {
        setIsOpen(!isOpen);
      };
    // this is for title
    <Helmet>
    <title>{pagetitle} | My Website</title>
  </Helmet>

   const name = 'bappi'
   

    const authData={
        name,
        user,
        googleusers,
        usersregister,
        usersLogin,
        userlogout,
        Userupdateinfo,
        handleModalToggle,
        setIsOpen,
        isOpen,
        loading,
        setloading,
        setpageTitle,
        pagetitle,

    }
    return (
        <Authcontext.Provider value={authData}>
            {children}
            
        </Authcontext.Provider>
    );
};

export default AuthProvider;