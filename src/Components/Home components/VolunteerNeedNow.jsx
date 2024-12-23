import React from 'react';

const VolunteerNeedNow = () => {
    fetch('http://localhost:8000/posts?limit=3')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    return (
        <div>
           <div className='my-6'>
           <h1 className='text-xl font-bold text-center'>Volunteer Needs Now </h1>
           </div>
            
        </div>
    );
};

export default VolunteerNeedNow;