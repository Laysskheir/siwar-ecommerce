import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowRightShort } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

function SearchMenu({ searchTerm }) {
  const [closeSearchMenu, setCloseSearchMenu ] = useState(false);

  const handleCloseMenu = () => {
    setCloseSearchMenu(!closeSearchMenu); // Set the state to true to close the menu
  };

  const products = useSelector((state) => state.product.products);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-gray-700">
      <div className="flex flex-col justify-center bg-blue text-white py-8 px-8 w-[500px] z-80">
        <div className="flex items-center justify-between">
          <p className="uppercase pb-2 text-gray-400 text-xs">products</p>
          <MdOutlineClose onClick={handleCloseMenu}  className="text-xl mb-2 cursor-pointer" />
        </div>
        <div className="border-gray-500 border-y-2">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-row gap-2 m-6" onClick={handleCloseMenu}>
              <img className="w-14 h-14" src={product.image} alt={product.name} />
              
              <div className="flex flex-col">
                <Link to={`/product-detail/${product.slug}`} className="hover:underline cursor-pointer">{product.name}</Link>
                
                <div className="flex gap-2 products-center text-gray-300">
                  <span className="product-price">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm pt-4">Search for "{searchTerm}"</p>
          <BsArrowRightShort className="text-xl mt-4" />
        </div>
      </div>
    </div>
  );
}

export default SearchMenu;
