import logo from "../../images/logo/logo.png";
import { FiChevronDown } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "../sidebar/SearchBar";
import { useDispatch, useSelector } from 'react-redux'
import { getSliders } from '../../redux/apiCalls/slidersApiCall'
import SearchMenu from "../sidebar/SearchMenu";
import { HiOutlineMenu } from "react-icons/hi";
import OutlineMenu from "../sidebar/OutlineMenu";

function Header() {
  
  const dispatch = useDispatch(); 
  const cartItems = useSelector((state) => state.product.cartItems);

  const categories = useSelector((state) => state.slider.categories);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [outlineMenuOpen, setOutlineMenuOpen] = useState(false);

  const [openSearchBar, setOpenSearchBar] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleOutlineMenu = () => {
    setOutlineMenuOpen((prevOutlineMenu) => !prevOutlineMenu);
  };
  
  
  const toggleSearchBar = () => {
    setOpenSearchBar(!openSearchBar);
  };

  const closeSearchBar = () => {
    setOpenSearchBar(false);
  }

  const handleSearchSubmit = (term) => {
    setSearchTerm(term); // Update the search term
  };
  

  useEffect(() => {
    dispatch(getSliders())
},[dispatch])

  return (
    <div className="relative">
      <div>
        {openSearchBar && <SearchBar closeSearchBar={closeSearchBar} onSearchSubmit={handleSearchSubmit} />}
      </div>
      <div className="w-full h-20 bg-blue text-gray-300 relative sm:flex sm:items-center sm:justify-between">
        <div className="container px-8 ">
          <div className="w-full h-full mx-auto p-4 inline-flex items-center justify-between grap-1 md:grap-3 cursor-pointer ">
            
            {/* outline menu */}
            <div onClick={handleOutlineMenu} className="hidden  smLg:flex text-3xl ">
              <HiOutlineMenu />
            </div>
            {outlineMenuOpen && <OutlineMenu isOpen={handleOutlineMenu} />}
            
            
            {/* Logo */}
            <Link
              to="/"
              className="h-[70%] px-2 items-center  justify-center  xl:inline-flex grap-1 hover:underline "
            >
              <img  className="w-20 h-20 object-contain pb-4 " src={logo} alt="logo" />
            </Link>

            {/* category */}
            <div className="relative flex-1 hidden md:inline-flex items-center justify-center gap-4 ">
              <Link to="/" className="">
                <p className=" hover:underline flex items-center">Home </p>
              </Link>

              <Link className="relative group">
                <p className="hover:underline flex items-center" onClick={toggleMenu}>
                  Collection{" "}
                  <span className={`transition ${isMenuOpen ? 'rotate-180' : 'rotate-0'} transform origin-center`}>
                    <FiChevronDown className="pt-1" />
                  </span>
                </p>
                {/* Flyout menu content */}
                {isMenuOpen && (
                  <div className="z-50 absolute top-full left-0 bg-blue shadow-md py-8 px-8 mt-2">
                    {categories.map((category) => (
                      <Link to={`products-list/${category.slug}`} onClick={toggleMenu} className="block text-gray-400 hover:text-white border-b-2 border-gray-500/50">
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
                {/* End Flyout menu content */}
              </Link>



              <Link
                to="/about-us"
                className=" hover:underline flex items-center"
              >
                About Us{" "}
              </Link>
              <Link
                to="/contact-us"
                className=" hover:underline flex items-center"
              >
                Contact Us{" "}
              </Link>
            </div>
            {/* Search */}
            <div className="text-xs flex flex-col smLg:hidden items-center px-2 cursor-pointer  mr-1 "
             onClick={toggleSearchBar}>
              <GoSearch className="transition-transform transform hover:scale-110 text-2xl" />
            </div>
            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center px-2 text-2xl  cursor-pointer relative"
            >
              <IoBagHandleOutline className="transition-transform transform hover:scale-110" />
              <span className="p-1 absolute left-7 top-2 bg-light text-blue rounded-full text-xs flex items-center justify-center w-5 h-5">
                {cartItems.length}
              </span>

            </Link>
          </div>
        </div>
      </div>
      {searchTerm && <SearchMenu searchTerm={searchTerm}  />}
      
    </div>
  );
}

export default Header;



