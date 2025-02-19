import React, { useEffect, useState } from "react";
import Needspostcard from "./Needspostcard";
import { Link } from "react-router-dom";

const VolunteerNeedNow = () => {
  const [needpostsData, setneedpostsData] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    fetch("https://volunteer-hub-server-alpha.vercel.app/posts?limit=4")
      .then((res) => res.json())
      .then((data) => {
        setneedpostsData(data);
        setloading(false);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto ">
      <div className="my-14">
        <h1 className="  text-center text-4xl font-bold dark:text-white">
          Volunteer Needs Now{" "}
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center h-40 p-10">
          <span className="loading loading-bars loading-lg mx-auto"></span>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {needpostsData.map((post, idx) => (
            <Needspostcard key={idx} post={post}></Needspostcard>
          ))}
        </section>
      )}
      <div className="flex justify-center my-6">
  <Link
    to={"/needposts"}
    className="btn font-semibold px-6 py-3 text-white bg-[#fdbc8f] hover:bg-[#fda97d] hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out rounded-lg"
  >
    See All
  </Link>
</div>
    </div>
  );
};

export default VolunteerNeedNow;
