import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { productActions } from "../../redux/slices/productSlice";
import { orderActions } from "../../redux/slices/orderSlice";

function SuccessCheckout() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shippingAddress = location.state?.shippingAddress || {};
  console.log(shippingAddress)

  const cartItems = useSelector((state) => state.product.cartItems);

  let shipping = 3;

  const calculateSubTotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  };
  const subtotal = calculateSubTotal();

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += subtotal + shipping;
    });
    return total;
  };
  const total = calculateTotal();


  const handleSubmit = () => {
  
    try {
  
      // Reset cart items and order data
      dispatch(productActions.clearCartItems());
      dispatch(orderActions.clearOrder()); 
      navigate('/');

    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="container flex flex-col  p-4">
        <div>
          <h1 className="text-3xl font-semibold mb-4">Order details</h1>
          <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-xl text-gray-900">Product</dt>
                <dd className="font-bold text-xl text-gray-700 sm:col-span-2">
                  Total
                </dd>
              </div>

              {cartItems.map((item) => (
                <div key={item.name} className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
                  <dt className="font-semibold text-gray-900">{item.name}</dt>
                  <dd className="text-gray-700 sm:col-span-2">{item.price}$</dd>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-lg text-gray-900">Subtotal:</dt>
                <dd className="text-gray-700 font-bold text-lg sm:col-span-2">
                  {subtotal}$
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Shipping:</dt>
                <dd className="text-gray-700 sm:col-span-2">{shipping}$</dd>
              </div>

              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Payment method:</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  Cash on delivery
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-lg text-gray-900">Total:</dt>
                <dd className="text-gray-700 font-bold text-lg sm:col-span-2">
                  {total}$
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="container flex flex-col  p-4">
            <h1 className="text-3xl font-semibold mb-4">Shipping address</h1>
            <div className="border border-gray-400 p-4 rounded-md">
                <p>Phone: {shippingAddress.phone}</p>
                <p>First Name: {shippingAddress.firstName}</p>
                <p>Last Name: {shippingAddress.lastName}</p>
                <p>Country: {shippingAddress.country}</p>
                <p>Address: {shippingAddress.streetAddress}</p>
                <p>City: {shippingAddress.city}</p>
                <p>State: {shippingAddress.state}</p>
                <p>Postal Code: {shippingAddress.postalCode}</p>
            </div>
            <button onClick={handleSubmit} className="bg-blue text-light m-4 py-3 px-4 w-32 transition-transform transform hover:scale-105">Back to Home</button>
        </div>
      </div>
    </div>
  );
}

export default SuccessCheckout;
