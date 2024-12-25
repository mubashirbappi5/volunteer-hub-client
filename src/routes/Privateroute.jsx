import React, { useContext } from 'react';
import { Authcontext } from '../Context/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user} = useContext(Authcontext)
    const location = useLocation()
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