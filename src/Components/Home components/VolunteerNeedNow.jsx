import React, { useEffect, useState } from 'react';
import Needspostcard from './Needspostcard';
import { Link } from 'react-router-dom';

const VolunteerNeedNow = () => {
    const [needpostsData,setneedpostsData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/posts?limit=3')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setneedpostsData(data)
    })
},[])
    return (
        <div className='w-11/12 mx-auto'>
           <div className='my-10'>
           <h1 className=' font-bold text-center text-2xl dark:text-white'>Volunteer Needs Now </h1>
           </div>
           <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                needpostsData.map((post,idx)=><Needspostcard key={idx} post={post}></Needspostcard>)
            }

           </section>
           <div className='flex justify-center my-6'>
            <Link to={'/needposts'} className='btn btn-outline font-semibold dark:text-white' >See All</Link>
           </div>

            
        </div>
    );
};

export default VolunteerNeedNow;