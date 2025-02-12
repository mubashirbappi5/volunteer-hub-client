import React from 'react';
import notfound from '../assets/Animation - 1735134283125.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>

            <Lottie className='md:w-96 mx-auto' animationData={notfound}></Lottie>
           <div className='flex justify-center'>
           <Link className='btn bg-orange-300' to={'/'}>Back to Home</Link>
           </div>
        </div>
    );
};

export default ErrorPage;