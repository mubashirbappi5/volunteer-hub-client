import React from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { BiSolidCategory } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMan, IoIosTime } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const navigate = useNavigate()
  const post = useLoaderData();
  
  const {
    _id,
    thumbnail,
    title,
    deadline,
    volunteers_needed,
    category,
    organizer_name,
    organizer_email,
    location,
    description,
  } = post;

  const handlebevolunteer = (id)=>{
    if(volunteers_needed >0){
      navigate(`/bevolunteer/${id}`)
    }
    else{
      toast.error("Volunter needed=0.You can not Apply this Post");
    }
   
  }
  return (
    <div className="md:w-8/12 w-full  mx-auto">
      <Helmet>
      <title>Post Details | Volunteer Hub</title>
      </Helmet>
      <div
       
        className="flex flex-col w-full my-10 bg-white border border-gray-200 rounded-lg shadow   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col  p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
          </h5>
          <p className="flex items-center gap-2 dark:text-gray-200"><BiSolidCategory />{category}</p>
          
        </div>
        <img
          className="object-cover  rounded-t-lg md:rounded-none md:rounded-s-lg"
          src={thumbnail}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 space-y-3 leading-normal">
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Description: </span> 
            { description}
          </p>
          <h3 className="flex items-center gap-2 dark:text-gray-400"><span className="flex font-medium items-center gap-2"><FaLocationDot /> Location:</span> { location}</h3>
          <h3 className="flex items-center gap-2 dark:text-gray-400"><span className="flex font-medium items-center gap-2"><IoIosTime /> Deadline:</span>  {  deadline}</h3>
          <h3 className="flex items-center gap-2 dark:text-gray-400"><span className="flex font-medium items-center gap-2"><IoIosMan /> Volunteers Needed:</span> {volunteers_needed}</h3>
          <h3 className=" flex items-center gap-2 dark:text-gray-400"><span className="font-medium flex items-center gap-2"><FaRegUserCircle /> Organizer Name:</span> {organizer_name}</h3>
          <h3 className="flex  items-center gap-2 dark:text-gray-400"><span className=" font-medium flex items-center gap-2"><MdEmail />Email:</span> {organizer_email}</h3>
          

       <button onClick={()=>handlebevolunteer(_id)} className="btn btn-outline text-white dark:bg-violet-600 border-none bg-orange-400">Be a Volunteer</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
