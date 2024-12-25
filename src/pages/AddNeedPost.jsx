import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Authcontext } from './../Context/AuthContext/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddNeedPost = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(Authcontext)
    const navigate = useNavigate()


    const handleaddedpost = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject)
        const {volunteersNeeded, ...newdata}= formObject
       const volunteers_needed = parseInt(volunteersNeeded)
        newdata.deadline =startDate
        newdata.volunteers_needed = volunteers_needed
        console.log(newdata)

        fetch('http://localhost:8000/posts',{
            method:'POST',
            headers:{
             "content-type":"application/json"
            },
            body:JSON.stringify(newdata)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                  title: "Post Added!",
                  text: " Your volunteer need  post successfully added.",
                  icon: "success"
                }) 
                navigate('/needposts')
            }  
            })
    
    }
    return (
        <div>
           <section class="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a Volunteer Needs Post</h2>
      <form onSubmit={handleaddedpost} >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Post Title</label>
                  <input type="text" name="title"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Title" required=""/>
              </div>
              <div className="w-full">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail </label>
                  <input type="text" name="thumbnail"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Thumbnail url" required=""/>
              </div>
              <div className="w-full">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                  <input type="text" name="location"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Location" required=""/>
              </div>
              <div className="w-full">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organizer name </label>
                  <input type="text" name="organizer_name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" readOnly defaultValue={user?.displayName
} required=""/>
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">organizer email </label>
                  <input type="text" name="organizer_email"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" readOnly defaultValue={user?.email
} required=""/>
              </div>
              <div class="w-full">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> volunteers needed 
                  </label>
                  <input type="number" name="volunteersNeeded"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="No. of volunteers needed 
" required=""/>
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select name='category' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Service">Social Service</option>
                      <option value="Animal welfare">Animal Welfare</option>
                  </select>
              </div>
              <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Deadline
              </label>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </div> 
              <div class="sm:col-span-2">
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea name='description' rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
              </div>
             
          </div>
          <div className='flex justify-center items-center my-6'>
                <input className='btn btn-wide' type="submit" value="Add Post" />
              </div>
          
          
      </form>
  </div>
</section>
        </div>
    );
};

export default AddNeedPost;