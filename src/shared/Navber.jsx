import { Dropdown, Button } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';



const Navber = () => {
    const links = <>
    <NavLink to={'/'}><li>Home</li></NavLink>
     <li>All volunteer Need posts</li>
    
    
    
    </>
    return (
        <div>
         <div className={`navbar  bg-gradient-to-r from-white via-orange-300 to-white bg-cover bg-center`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img className='w-10' src="https://i.ibb.co.com/h9WwMPG/help.png" alt="" />Volunteer <span className='text-orange-400'><Typewriter
            words={['-Hub']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={500}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    
    </ul>
  </div>
  <div className="navbar-end">
  <Link to={'/login'}><button className="btn text-black font-bold bg-orange-300">Login</button></Link>
    <div>
    <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn  m-1">My Profile</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><>Item 1</></li>
    <li><>Item 2</></li>
  </ul>
</div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Navber;