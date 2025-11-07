import React from "react";

const Navbar = () => {
  return (
    <nav className="flex fixed justify-between w-full bg-slate-700 py-1 text-white gap-8 h-10">
      <div className="logo">
        <span className="font-semibold text-lg mx-10">TO DO APP</span>
      </div>
      <ul className="flex gap-14 mx-10">
        <li  className="hover:text-black hover:cursor-pointer"><a href="#"></a> Home</li>
        <li className="hover:text-black hover:cursor-pointer"><a href="#todos"></a> My tasks</li>
      </ul>
    </nav>
  );
};

export default Navbar;
