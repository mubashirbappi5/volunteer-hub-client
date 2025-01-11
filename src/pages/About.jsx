import React from 'react';
import img1 from '../assets/image/partner/SL-091823-63290-07.jpg'
const About = () => {
    return (
        <div>
			 <div
        className="hero  border border-orange-300 "
        style={{
          backgroundImage:
            `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
        }}
      >
       
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-black font-bold">
			About Us
            </h1>
            <p className="mb-5 text-black">
			Learn more about our mission, values, and the team dedicated to making a positive impact.
            </p>
          </div>
        </div>
      </div>
	  <section className="m-6 md:m-12 bg-base-100 p-5 text-gray-100 rounded-lg ">
  <div className="container mx-auto p-6 text-center space-y-4">
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-orange-400">Connecting Volunteers with Opportunities</h2>
    <p className="text-gray-400 text-lg">
      Volunteer Hub bridges the gap between organizations in need and volunteers eager to contribute their time and skills. From local events to global causes, we make getting involved easier than ever.
    </p>
  </div>

  <div className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
    {[
      {
        title: "Our Mission",
        content: "Empowering individuals to make meaningful contributions by connecting them with impactful volunteering opportunities.",
      },
      {
        title: "Our Vision",
        content: "A world where every act of kindness strengthens a more connected global community.",
      },
      {
        title: "What We Offer",
        content: "• Access to a wide range of volunteering opportunities\n• Tools for organizations to find volunteers\n• A supportive community for change-makers.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-6 text-black rounded-lg shadow-lg transform transition-all hover:scale-105"
      >
        <div className="p-4 bg-orange-300 text-white rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-violet-500">{item.title}</h3>
        <p className="text-gray-600 text-center mt-2 whitespace-pre-wrap">{item.content}</p>
      </div>
    ))}
  </div>
</section>

        </div>
    );
};

export default About;