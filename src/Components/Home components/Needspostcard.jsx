import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosTime } from "react-icons/io";
import { Link } from "react-router-dom";

const Needspostcard = ({ post }) => {
  const { title, category, description, thumbnail, _id } = post;
  return (
    <div>
      <div className=" bg-white border h-[400px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-52 w-full" src={thumbnail} alt="" />

        <div className="p-2 space-y-3">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <h6
            className="dark:text-gray-400 flex items-center   font-medium tooltip tooltip-left"
            data-tip="Category"
          >
            <BiSolidCategory className="text-orange-400" />  {category}
          </h6>
          <p className="text-sm text-gray-600 dark:text-gray-300">
        {description.slice(0, 60)}...
      </p>

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

export default Needspostcard;
