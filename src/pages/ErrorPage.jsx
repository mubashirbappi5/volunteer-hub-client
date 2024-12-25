import React from 'react';
import notfound from '../assets/Animation - 1735134283125.json'
import Lottie from 'lottie-react';
const ErrorPage = () => {
    return (
        <div>
            <Lottie className='md:w-96 mx-auto' animationData={notfound}></Lottie>
            
        </div>
    );
};

export default ErrorPage;