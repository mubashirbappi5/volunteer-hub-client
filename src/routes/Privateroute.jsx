import React, { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../shared/Loading';

const Privateroute = ({children}) => {
    const {user,loading} = useContext(Authcontext)
    const location = useLocation()
    if(loading){
        return <div className='flex h-screen justify-center'><Loading/></div>
            
        

    }
    if(user){
        return children
    }
    return (
        <div>
            <Navigate to={'/login'} state={location.pathname}></Navigate>
        </div>
    );
};

export default Privateroute;