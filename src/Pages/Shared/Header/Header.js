import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from './../../../contexts/AuthProvider/AuthProvider';
const Header = () => {
  const {user,logOut}=useContext(AuthContext)
    const menuItems=<>
      <li className='font-semibold'><Link to="/">Home</Link></li>
      <li className='font-semibold'><Link to="/about">About</Link></li>
      <li className='font-semibold'><Link to="/order">My Order</Link></li>
      {
        user?.email==="joy@gmail.com"&&<li className='font-semibold'><Link to="/dashboard">Dashboard</Link></li>
      }
    </>
   const logout=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err))
   }
    return (
<div className='bg-black  text-white'>
<div className="navbar max-w-screen-xl mx-auto  h-20">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
         {menuItems}
      </ul>
    </div>
    <Link className="">
       <h3 className='font-bold sm:text-lg md:text-xl lg:text-2xl'>E-commerce</h3>
    </Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {menuItems}
    </ul>
    
  </div>
  
 {
  user?.email? <button onClick={logout} className="btn btn-outline btn-sm border-slate-50 text-white">Log Out</button>: <button className="btn btn-outline btn-sm border-slate-50 text-white"><Link to="/login">LogIn</Link></button>
 }
 <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
</div>
</div>
    );
};

export default Header;