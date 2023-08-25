import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/productSlice";
import { useParams, Link } from "react-router-dom";

function CartItem({ id, name, price, image, discount, quantity }) {

  const { slug } = useParams();

  const newPrice = price * (1 - discount / 100);

  const total = price * (1 - discount / 100) * quantity;

  const dispatch = useDispatch();

  return (
    <tr className="border-b">
      <td className="py-6 px-4">
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 mr-4 rounded"
          />
          <div>
            <Link to={`/product-detail/${slug}`} className="text-lg font-semibold hover:underline">{name}</Link>
            <p className="text-gray-600">${newPrice}</p>
          </div>
        </div>
      </td>
      <td className="py-6 px-4 max-w-[500px] flex flex-col sm:flex-row items-center sm:flex-wrap">
        <div className="flex items-center border justify-between ">
          <button
            className="px-3 py-2 rounded-l text-2xl focus:outline-none"
            onClick={() => {
              if (quantity > 1) {
                dispatch(
                  productActions.updateCartQuantity({
                    id: id,
                    quantity: quantity - 1,
                  })
                );
              }
            }}
          >
            -
          </button>
          <span className="px-4 text-black">{quantity}</span>
          <button
            className="px-3 py-2 rounded-r text-2xl focus:outline-none"
            onClick={() =>
              dispatch(
                productActions.updateCartQuantity({
                  id: id,
                  quantity: quantity + 1,
                })
              )
            }
          >
            +
          </button>
        </div>
        <span
          className="m-4 text-sm cursor-pointer"
          onClick={() => {
            console.log("Removing item with ID:", id);
            dispatch(productActions.removeFromCart({ id: id }));
          }}
        >
          <FaRegTrashAlt />
        </span>
      </td>
      <td className="py-6 px-4 text-lg font-semibold"> {total.toFixed(2)} USD</td>
    </tr>
  );
}

export default CartItem;
