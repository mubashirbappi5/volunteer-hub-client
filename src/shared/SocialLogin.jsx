import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Authcontext } from '../Context/AuthContext/AuthProvider';
import toast from 'react-hot-toast';



const SocialLogin = () => {

    const {googleusers,name} = useContext(Authcontext)
    const handlelogin = (e)=>{
        e.preventDefault()
        console.log(name)
        googleusers()
        .then(res=>{
            console.log(res.user)
            toast.success('Login Successful!');
        })
        .catch(error=>{
            toast.error(error.message);
        })
    }
    return (
        <div>
            <button onClick={handlelogin} className="btn btn-outline"><FaGoogle />Login with Google</button>
            
        </div>
    );
};

export default SocialLogin;