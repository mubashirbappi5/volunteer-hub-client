import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Authcontext } from '../Context/AuthContext/AuthProvider';



const SocialLogin = () => {

    const {googleusers,name} = useContext(Authcontext)
    const handlelogin = (e)=>{
        e.preventDefault()
        console.log(name)
        googleusers()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <button onClick={handlelogin} className="btn btn-outline"><FaGoogle />Login with Google</button>
            
        </div>
    );
};

export default SocialLogin;