import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../firebace/Firebace.init';

export const Authcontext  = createContext()
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const googleusers = ()=>{
        return signInWithPopup(auth, provider)
    }
    const usersregister = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
   

   const name = 'bappi'
   

    const authData={
        name,
        googleusers,
        usersregister,

    }
    return (
        <Authcontext.Provider value={authData}>
            {children}
            
        </Authcontext.Provider>
    );
};

export default AuthProvider;