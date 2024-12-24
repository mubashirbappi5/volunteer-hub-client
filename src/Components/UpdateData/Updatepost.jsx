import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";

import { Modal, Button } from "flowbite-react";
import { Authcontext } from '../../Context/AuthContext/AuthProvider';
const Updatepost = ({updatedata}) => {
     const [startDate, setStartDate] = useState(new Date());
     const{isOpen,user, handleModalToggle}=useContext(Authcontext)
     console.log(updatedata)
     const {title,volunteers_needed,deadline,description,category,location,thumbnail,_id} = updatedata

     const handleupdatepost = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject)
        const {volunteersNeeded, ...newdata}= formObject
       const volunteers_needed = parseInt(volunteersNeeded)
        newdata.deadline =startDate
        newdata.volunteers_needed = volunteers_needed
        console.log(newdata)
        fetch(`http://localhost:8000/posts/${_id}`,{
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(newdata)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount == 1){
                alert('done')
                handleModalToggle()

            }

        })

     }
    return (
        <div>
            <div>
        <Modal
          className="bg-black/40  "
          show={isOpen}
          onClose={handleModalToggle}
        >
          <Modal.Header className="bg-white dark:bg-gray-700 border-b">
            Update Your Post
          </Modal.Header>
          <Modal.Body className="bg-white dark:bg-gray-700 shadow rounded-lg ">
            <div className=" px-4 mx-auto max-w-2xl ">
              <form onSubmit={handleupdatepost}>
                <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-3">
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Post Title
                    </label>
                    <input
                      type="text"
                      name="title"
                     defaultValue={title}
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
                      value={user?.displayName}
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
                      value={user?.email}
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
                     
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected={category}>{category}</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Service">Social Service</option>
                      <option value="Animal welfare">Animal Welfare</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      {" "}
                      Deadline
                    </label>
                    <DatePicker
                      className="w-40 rounded-lg border-opacity-5"
                      selected={deadline}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Description
                    </label>
                    <textarea
                      name="description"
                      defaultValue={description}
                      rows="2"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Your description here"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center items-center my-6">
                  <input
                    className="btn btn-wide"
                    type="submit"
                    value="Update Post"
                  />
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </div>
            
        </div>
    );
};

export default Updatepost;