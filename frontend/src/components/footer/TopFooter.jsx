import React from "react";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function TopFooter() {
  return (
    <footer className="bg-blue text-white py-16 md:flex md:items-center md:justify-between px-8  border-b-2 border-gray-500/50">
      <div id="info" className="md:w-1/2">
        <h1 className="text-xl font-bold mb-4">Info</h1>
        <div className="text-gray-400 space-y-2">
          <p>Shipping Policy</p>
          <p>Refund Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>

      <div id="about" className="md:w-1/2 mt-6 md:mt-0">
        <h1 className="text-xl font-bold mb-4">About</h1>
        <p className="text-gray-400">
          Where we offer a unique collection of high-quality bracelets that are
          perfect for any occasion. Our goal is to provide our customers with an
          exceptional shopping experience and a range of stylish bracelets that
          they can enjoy for years to come.
        </p>
        <div className="flex items-center justify-end gap-4 text-2xl p-4">
          <Link to={`/`}>
            <BiLogoFacebookSquare />
          </Link>

          <Link to={`/`}>
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default TopFooter;
