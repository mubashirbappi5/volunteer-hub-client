import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/AuthContext/AuthProvider";
import { Link } from "react-router-dom";
import nodata from "../assets/Animation - 1735041941677.json";
import Lottie from "lottie-react";
import DatePicker from "react-datepicker";

import { Modal, Button } from "flowbite-react";

const MypostSManage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(Authcontext);
  const [myposts, setmypost] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/posts?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setmypost(data);
      });
  }, [user]);

  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        const remaingsmypost = myposts.filter((mypost) => mypost._id !== id);
        setmypost(remaingsmypost);
        console.log("delete done");
      });
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="hero  "
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/ZXBs9z3/environment-volunteer-concept-with-persons-holding-boxes-donations.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Manage Your Volunteer Posts
            </h1>
            <p className="mb-5">
              Keep track of your posts, make updates, and remove outdated ones
              with ease.
            </p>
          </div>
        </div>
      </div>
      <div className="my-5">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "profile" ? "border-blue-500" : ""
                }`}
                id="profile-tab"
                onClick={() => handleTabClick("profile")}
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "profile" ? "true" : "false"}
              >
                Profile
              </button>
            </li>

            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === "settings" ? "border-blue-500" : ""
                }`}
                id="settings-tab"
                onClick={() => handleTabClick("settings")}
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "settings" ? "true" : "false"}
              >
                My volunteer need post
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === "profile" ? "" : "hidden"
            }`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              .
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === "dashboard" ? "" : "hidden"
            }`}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong className="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              .
            </p>
          </div>
          <div
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === "settings" ? "" : "hidden"
            }`}
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
              <div className="flex justify-between mt-6">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">
                  My Posts
                </h2>
                <h1 className="">shape</h1>
              </div>
              {myposts.length === 0 ? (
                <>
                  <div className="w-8/12 mx-auto flex bg-base-100 flex-col">
                    <Lottie animationData={nodata}></Lottie>
                    <Link to={"/addpost"} className="btn btn-outline">
                      Add Post
                    </Link>
                  </div>
                </>
              ) : (
                <div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full mx-auto text-xs">
                      <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                      </colgroup>
                      <thead className="dark:bg-gray-300 ">
                        <tr className="text-left border-b">
                          <th className="p-3 hover:text-orange-400">NO.</th>
                          <th className="p-3 hover:text-orange-400">
                            Post Title
                          </th>
                          <th className="p-3 hover:text-orange-400">
                            Category
                          </th>
                          <th className="p-3 hover:text-orange-400">
                            Deadline
                          </th>
                          <th className="p-3 hover:text-orange-400">
                            Volunteers Needed
                          </th>
                        </tr>
                      </thead>

                      {myposts.map((mypost, index) => (
                        <tbody key={index}>
                          <tr className="border border-opacity-20 dark:border-gray-300  hover:bg-orange-100 dark:bg-gray-50">
                            <td className="p-3">
                              <p>{index + 1}</p>
                            </td>
                            <td className="p-3">
                              <h1 className="font-medium">{mypost.title}</h1>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {mypost.category}
                              </p>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {new Date(mypost.deadline).toLocaleDateString()}
                              </p>
                            </td>
                            <td className="p-3">
                              <p className="hover:font-medium">
                                {mypost.volunteers_needed}
                              </p>
                            </td>
                            <td className="p-3 text-right">
                             
                              <button  className="btn btn-sm" onClick={handleModalToggle}>
                              Update
                              </button>
                            </td>
                            <td className="p-3 ">
                              <button
                                onClick={() => handleDelete(mypost._id)}
                                className="btn btn-sm"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------- */}
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
              <form>
                <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-3">
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Post Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Title"
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
                      <option selected="">Select category</option>
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
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                      Description
                    </label>
                    <textarea
                      name="description"
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

export default MypostSManage;
