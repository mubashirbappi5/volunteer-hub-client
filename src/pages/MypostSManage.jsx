import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../Context/AuthContext/AuthProvider';

const MypostSManage = () => {
    const {user} = useContext(Authcontext)
       useEffect(()=>{
        fetch(`http://localhost:8000/posts?email=${user?.email}`)
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
       })

       },[])
      
    return (
        <div>
            <div>
                <h1>Manage Your Volunteer Posts</h1>
                <p>Keep track of your posts, make updates, and remove outdated ones with ease.</p>
            </div>
            
        </div>
    );
};

export default MypostSManage;