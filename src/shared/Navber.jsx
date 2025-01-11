import { Dropdown, Button } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Authcontext } from "../Context/AuthContext/AuthProvider";
import { Helmet } from "react-helmet";
import Theme from "./Theme";

const Navber = () => {
  const { user, userlogout,loading } = useContext(Authcontext);
  const location = useLocation();
  const routeTitles = {
    "/": "Home - Volunteer Hub",
   "/login":"Login - Volunteer Hub ",
   "/register":"Register - Volunteer Hub ",
    "/needposts": "All Volunteer Posts - Volunteer Hub",
    "/addpost": "Add Post - Volunteer Hub",
    "/mypostmanage": "My Post Manage - Volunteer Hub",
    
    "/about": "About - Volunteer Hub",
    
    "/contact": "Contact - Volunteer Hub",
    
  };
  const DefaultTitle = routeTitles[location.pathname] || "Volunteer Hub";
  const handlelogout = () => {
    userlogout()
      .then((res) => {})
      .catch((error) => {
       
      });
  };
  const links = (
    <>
      <NavLink to={"/"}>
        <li className="dark:hover:text-violet-600">
          <button className="font-semibold focus:bg-violet-400 dark:focus:bg-orange-300">Home</button>
        </li>
      </NavLink>

      <NavLink to={"/needposts"}>
        <li className="dark:hover:text-violet-600 ">
          <button className="font-semibold focus:bg-violet-400 dark:focus:bg-orange-300" >All volunteer Need posts</button>
        </li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>
          <button className="font-semibold focus:bg-violet-400 dark:focus:bg-orange-300" >About</button>
        </li>
      </NavLink>
      <NavLink to={"/contact"}>
        <li>
          <button className="font-semibold focus:bg-violet-400 dark:focus:bg-orange-300" >Contact</button>
        </li>
      </NavLink>
     <NavLink>
     <li>
      <button className="font-semibold focus:bg-violet-400 dark:focus:bg-orange-300"><div className="dropdown dropdown-bottom">
                  <div
                    tabIndex={0}
                    role="button"
                    className="    "
                  >
                    My Profile
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[100] dark:bg-black w-52 p-2 shadow"
                  >
                    <li>
                      <Link to={'/addpost'} >Add Volunteer need Post</Link>
                    </li>
                    <li>
                      <Link to={'/mypostmanage'}>Manage My Posts </Link>
                    </li>
                  </ul>
                </div></button>
      </li>
     </NavLink>
    </>
  );
  return (
    <div>
      <Helmet>
        <title>{DefaultTitle}</title>
      </Helmet>
      <div
        className={`navbar dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-gray-700 bg-gradient-to-r from-white via-orange-300 to-white bg-cover bg-center`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 dark:text-white w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-700 dark:text-white  rounded-box z-[100] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className="btn btn-ghost text-xl tooltip tooltip-bottom flex md:gap-2 dark:text-white"   data-tip="Volunteer-Hub">
            <img
              className="w-6 md:w-10  "
            
              src="https://i.ibb.co.com/h9WwMPG/help.png"
              alt=""
            />
           <span className=" hidden md:inline "> Volunteer</span>{" "}
            <span className="text-orange-400 hidden md:inline dark:text-violet-600">
              <Typewriter
                words={["-Hub"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={500}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 dark:text-white">{links}</ul>
        </div>
        <div className="navbar-end">
        <div>
               
              </div>
            
             
         {user ? (
          <div>
             { loading?<div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>:
            <div className="flex">
              
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end px-4">
              <div tabIndex={0} role="button" className="btn btn-circle m-1">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-10 md:w-12 h-10 md:h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 ring-orange-400 dark:ring-offset-gray-100"
                 
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[100] w-52 p-2 shadow"
              >
                <li>
                  <h1 className="font-semibold text-xl text-orange-400">
                    {user?.displayName}
                  </h1>
                </li>
                <li>
                  <button onClick={handlelogout} className="btn btn-sm">
                    logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
} </div>) : (
            <div>
              <Link to={"/login"}>
                <button className="btn text-black font-bold btn-outline border-none dark:border-none dark:bg-violet-600 bg-orange-300 mx-4">
                  Login
                </button>
              </Link>
            </div>
          )}
         
       
          <Theme/>
        </div>
      </div>
    </div>
  );
};

export default Navber;
