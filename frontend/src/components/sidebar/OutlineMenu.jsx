import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

function OutlineMenu({ isOpen }) {
  return (
    <div className={`fixed top-0 left-0 z-50 transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* Apply styles for full screen */}
      <div className={` h-screen bg-blue overflow-hidden ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
        <div className="flex flex-col p-8 justify-start gap-4 h-full w-[400px] mx-auto font-semibold text-xl">
            <MdOutlineClose onClick={isOpen} className='text-3xl' />
          <Link to="/"  onClick={isOpen}>
            <p className="hover:underline flex items-center">Home </p>
          </Link>

          <Link className="relative group">
            <p className="hover:underline flex items-center">
              Collection{" "}
              <span>
                <FiChevronDown className="pt-1" />
              </span>
            </p>
            {/* Add your sub-menu content here */}
          </Link>

          <Link to="/about-us" onClick={isOpen} className="hover:underline flex items-center">
            About Us{" "}
          </Link>
          <Link to="/contact-us"  onClick={isOpen} className="hover:underline flex items-center">
            Contact Us{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OutlineMenu;
