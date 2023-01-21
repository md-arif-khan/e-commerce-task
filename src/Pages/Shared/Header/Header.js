import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const Header = () => {
    const menuItems=<>
      <li className='font-semibold'><Link to="/">Home</Link></li>
      <li className='font-semibold'><Link to="/about">About</Link></li>
      <li className='font-semibold'><Link to="/services">Services</Link></li>
    </>
    return (
<div className='bg-black mb-5 text-white'>
<div className="navbar max-w-screen-xl mx-auto  h-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {menuItems}
      </ul>
    </div>
    <Link className="">
       <h3 className='font-bold sm:text-lg md:text-xl lg:text-2xl'>E-commerce</h3>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-secondary">Appointment</button>
  </div>
</div>
</div>
    );
};

export default Header;