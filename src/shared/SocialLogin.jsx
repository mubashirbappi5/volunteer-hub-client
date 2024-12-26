import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Authcontext } from '../Context/AuthContext/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = () => {
 const navigate = useNavigate()
 const location = useLocation()
 
    const {googleusers,name} = useContext(Authcontext)
    const handlelogin = (e)=>{
        e.preventDefault()
       
        googleusers()
        .then(res=>{
          
            toast.success('Login Successful!');
            navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }
    return (
        <div>
            <button onClick={handlelogin} className="btn btn-outline dark:bg-violet-600"><FaGoogle />Login with Google</button>
            
        </div>
    );
};

export default SocialLogin;