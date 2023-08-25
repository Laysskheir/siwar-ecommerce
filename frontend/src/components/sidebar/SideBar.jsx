import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar({ onClose }) {
  const cartItems = useSelector((state) => state.product.cartItems);

  return (
    <div className="bg-blue absolute right-20 py-8 px-8 text-light w-96 border-t-2 transform transition-transform duration-300 ease-in-out">
      <div className="flex flex-row items-center gap-16 m-4">
        <p className="flex-row flex items-center text-sm gap-2">
          <AiOutlineCheck />
          Item added to your cart
        </p>
        <AiOutlineClose
          className="text-xl cursor-pointer transform hover:scale-105"
          onClick={onClose}
        />
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-row gap-2 m-6">
          <img className="w-14 h-14" src={item.image} alt={item.name} />

          <div className="flex flex-col">
            <span className="hover:underline cursor-pointer">{item.name}</span>

            <div className="flex gap-2 items-center text-gray-300">
              <span className="item-quantity">x{item.quantity}</span>
              <span className="item-price">${item.price * item.quantity}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2 mt-6">
        <Link
          to={`/cart`}
          className="bg-blue border-2 py-2 px-3 flex items-center justify-center"
        >
          View my cart ({cartItems.length})
        </Link>
        <Link
          to={`/checkout`}
          className="bg-white py-2 px-3 text-blue flex items-center justify-center"
        >
          Check out
        </Link>
        <button className="underline text-sm">Continue shopping</button>
      </div>
    </div>
  );
}

export default SideBar;
