import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../Context/AuthContext/AuthProvider';
import DatePicker from 'react-datepicker';

const BeAvolunteer = () => {
    const postsData = useLoaderData()
    const {user} = useContext(Authcontext)
    const {title,volunteers_needed,deadline,description,category,location,thumbnail,_id,organizer_name,organizer_email} = postsData
  const [startDate, setStartDate] = useState(new Date());

    const handleBevolunteer = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject)
        const {volunteersNeeded, ...newdata}= formObject
       const volunteers_needed = parseInt(volunteersNeeded)
       const postId = _id
       newdata.postId = postId
        newdata.deadline =startDate
        newdata.volunteers_needed = volunteers_needed
        console.log(newdata)

        fetch('http://localhost:8000/volunteer',{
            method:'POST',
            headers:{
             "content-type":"application/json"
            },
            body:JSON.stringify(newdata)
        })
        .then(res=>res.json())
        .then(data=>{
         if(data.insertedId){
           alert('add done!')
         }
        })

    }
    return (
        <div className='lg:h-[1000px]'>
            <div>
            <div
  className="py-28 relative"
  style={{
    backgroundImage: `url(${thumbnail})`,
           backgroundSize: "cover",
          backgroundPosition: "center 20%",
         
  }}>
  {/* <div className="hero-overlay  bg-opacity-10"></div> */}
  <div class="absolute inset-0  bg-black bg-opacity-60"></div>
  <div className="hero-content relative z-30  text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold text-white">Join the Movement: Be a Volunteer</h1>
      <p className="mb-5">
      Your small effort can create a big impact. Sign up as a volunteer and make a difference today!
      </p>
      
    </div>
  </div>
            </div>
            </div>
            <div className=' lg:px-20 px-5'>
                <div className=" lg:absolute top-80 bg-white p-10 border rounded-md shadow-xl mx-auto  my-10 ">
                              <form onSubmit={handleBevolunteer}>
                                <div className="grid gap-4 lg:grid-cols-3 :grid-cols-1 sm:gap-6">
                                  <div className="sm:col-span-3">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      Post Title
                                    </label>
                                    <input
                                      type="text"
                                      name="title"
                                     defaultValue={title}
                                     readOnly
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    
                                      required=""
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      Thumbnail{" "}
                                    </label>
                                    <input
                                      type="text"
                                      name="thumbnail "
                                      defaultValue={thumbnail}
                                      readOnly
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Enter Thumbnail url"
                                      required=""
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      Location
                                    </label>
                                    <input
                                      type="text"
                                      name="location"
                                      defaultValue={location}
                                      readOnly
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Enter Location"
                                      required=""
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      Organizer name{" "}
                                    </label>
                                    <input
                                      type="text"
                                      name="organizer_name "
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      value={organizer_name}
                                      readOnly
                                      required=""
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      organizer email{" "}
                                    </label>
                                    <input
                                      type="text"
                                      name="organizer_email"
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      value={organizer_email}
                                      readOnly
                                      required=""
                                    />
                                  </div>
                                  <div class="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      {" "}
                                      volunteers needed
                                    </label>
                                    <input
                                      type="number"
                                      name="volunteersNeeded"
                                      defaultValue={volunteers_needed}
                                      readOnly
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="No. of volunteers needed 
                       "
                                      required=""
                                    />
                                  </div>
                                  <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      Category
                                    </label>
                                    <select
                                      name="category"
                                     readOnly
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                      <option selected={category}>{category}</option>
                                      <option value="Healthcare">Healthcare</option>
                                      <option value="Education">Education</option>
                                      <option value="Service">Social Service</option>
                                      <option value="Animal welfare">Animal Welfare</option>
                                     
                                    </select>
                                  </div>
                                  <div className="">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      {" "}
                                      Deadline
                                    </label>
                                    <DatePicker
                                      className=" w-80 md:w-40 lg:w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      selected={deadline}
                                      onChange={(date) => setStartDate(date)}
                                      readOnly
                                    />
                                  </div>
                                  
                                  <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                     Volunteer Name
                                    </label>
                                    <input
                                      type="text"
                                      name="volunteer_Name"
                                      readOnly
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      value={user?.displayName}
                                      required=""
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                    Volunteer Email
                                    </label>
                                    <input
                                      type="text"
                                      name="volunteer_email"
                                      readOnly
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      value={user?.email}
                                      required=""
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                     Status
                                    </label>
                                    <input
                                      type="text"
                                      name="status"
                                      defaultValue={'requested'}
                                    
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    
                                      required=""
                                    />
                                  </div>
                                  <div className="w-full">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                     Suggestion
                                    </label>
                                    <input
                                      type="text"
                                      name="suggestion"
                                     
                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Write your Suggestion"
                                      required=""
                                    />
                                  </div>
                                  <div class="sm:col-span-3">
                                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                                      Description
                                    </label>
                                    <textarea
                                      name="description"
                                      defaultValue={description}
                                      readOnly
                                      rows="3"
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Your description here"
                                    ></textarea>
                                  </div>
                                </div>
                                <div className="flex justify-center items-center my-6">
                                  <input
                                    className="btn btn-wide"
                                    type="submit"
                                    value="Request"
                                  />
                                </div>
                              </form>
                            </div>
            </div>
            
        </div>
    );
};

export default BeAvolunteer;