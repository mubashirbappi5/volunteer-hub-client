import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
 
  const { _id, description, volunteers_needed, title, thumbnail, location } = post;

  return (
    <div className="">
      <div className="max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-52 object-cover w-full" src={thumbnail} alt="" />

        <div className="p-2  space-y-4">
         <div className="flex justify-between">
         <h5 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <h6 className="flex items-center gap-2 font-thin dark:text-gray-400 text-sm">
              {" "}
              <FaLocationDot />
              {location}
            </h6>
         </div>
          <p>{description.slice(0, 40)}</p>
          <Link
            to={`/postdetails/${_id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
