import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Authcontext } from "./../Context/AuthContext/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt, FaMapMarkerAlt, FaUsers, FaPen } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FiImage } from "react-icons/fi";
import img1 from "../assets/image/Volunteering-rafiki.png";
import useAxios from "../Hooks/UseAxios";
import "./foraddvolunteer/Demo.css";

const AddNeedPost = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();
  const axiosSecure = useAxios();

  const handleaddedpost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    const { volunteersNeeded, ...newdata } = formObject;
    const volunteers_needed = parseInt(volunteersNeeded);
    newdata.deadline = startDate;
    newdata.volunteers_needed = volunteers_needed;

    axiosSecure.post("posts", newdata).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Post Added!",
          text: "Your volunteer needs post has been successfully added.",
          icon: "success",
        });
        navigate("/needposts");
      }
    });
  };

  return (
    <div className="my-10">
      <section
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex justify-center items-center"
        style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundBlendMode: "overlay" }}
      >
        <div className="bg-white shadow-lg rounded-xl p-8 w-11/12 sm:w-9/12 lg:w-7/12 xl:w-6/12">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
            Add a Volunteer Needs Post
          </h2>
          <form onSubmit={handleaddedpost}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-blue-800 mb-1">
                  <FaPen /> Post Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter the post title"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-blue-800 mb-1">
                  <FiImage /> Thumbnail
                </label>
                <input
                  type="text"
                  name="thumbnail"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter thumbnail URL"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-blue-800 mb-1">
                  <FaMapMarkerAlt /> Location
                </label>
                <input
                  type="text"
                  name="location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter location"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-blue-800 mb-1">
                  <FaUsers /> Volunteers Needed
                </label>
                <input
                  type="number"
                  name="volunteersNeeded"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter number of volunteers"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-blue-800 mb-1">
                  <MdCategory /> Category
                </label>
                <select
                  name="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Service">Social Service</option>
                  <option value="Animal welfare">Animal Welfare</option>
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-blue-800 mb-1">
                  <FaRegCalendarAlt /> Deadline
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-center gap-2 text-sm font-medium text-blue-800 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  placeholder="Enter a detailed description"
                  required
                ></textarea>
              </div>
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-all"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddNeedPost;
