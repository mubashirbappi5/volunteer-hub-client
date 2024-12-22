import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const {
    thumbnail,
    title,
    deadline,
    volunteers_need,
    category,
    organizer_name,
    organizer_email,
    location,
    description,
  } = post;
  return (
    <div className="w-8/12 mx-auto">
      <div
       
        className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col  p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
          </h5>
          <p>{category}</p>
          
        </div>
        <img
          className="object-cover  rounded-t-lg md:rounded-none md:rounded-s-lg"
          src={thumbnail}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-semibold">Description: </span> 
            { description}
          </p>
          <h3> location: { location}</h3>
          <h3> deadline: {  deadline}</h3>
          <h3> volunteers_need: { volunteers_need}</h3>
          <h2>{organizer_name}</h2>
          <h3>{organizer_email}</h3>

        <Link><button className="btn">Be a Volunteer</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
