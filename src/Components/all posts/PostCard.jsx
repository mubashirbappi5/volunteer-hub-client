import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
 
  const { _id, description, volunteers_needed, title, thumbnail, location } = post;

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
    <img
      className="rounded-t-lg h-52 object-cover w-full"
      src={thumbnail}
      alt={title}
    />
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h6 className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <FaLocationDot className="text-orange-400" />
          {location}
        </h6>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {description.slice(0, 60)}...
      </p>
      <Link
        to={`/postdetails/${_id}`}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      >
        View Details
        <svg
          className="rtl:rotate-180 w-4 h-4 ms-2"
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
  );
};

export default PostCard;
