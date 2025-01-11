import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../assets/image/partner/img1.png'
import img2 from '../../assets/image/partner/img2.png'
import img3 from '../../assets/image/partner/img3.png'
import img4 from '../../assets/image/partner/img4.png'
import img5 from '../../assets/image/partner/img5.png'
import img6 from '../../assets/image/partner/img6.png'
import progoti from '../../assets/image/partner/progti.png'
const Partners = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold dark:text-white text-center my-10'>Driving Impact Together</h1>
            <div className='my-20'>
            <Marquee>
                <img className='w-40' src={progoti} alt="" />
                <img className='w-40' src={img1} alt="" />
                <img className='w-40' src={img2} alt="" />
                <img className='w-40' src={img3} alt="" />
                <img className='w-40' src={img4} alt="" />
                <img className='w-40' src={img5} alt="" />
                <img className='w-40' src={img6} alt="" />
            </Marquee>
            </div>
            
        </div>
    );
};

export default Partners;