import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../Context/AuthContext/AuthProvider';

const axiosInstance = axios.create({
    baseURL: 'https://volunteer-hub-server-alpha.vercel.app/',
    withCredentials:true
  });
const useAxios = () => {
    const navigate = useNavigate()
    const {userlogout} = useContext(Authcontext)
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log('api response error status', error.status);
            if (error.status === 401 || error.status === 403) {
                userlogout()
                    .then(() => {
                      
                        navigate('/login')
                    })
                    .catch(err => console.log(err))
            }
            return Promise.reject(error);
        })
    },[])
    return axiosInstance
   
};

export default useAxios;