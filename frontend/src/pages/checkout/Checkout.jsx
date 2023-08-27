import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import CartItem from "../../components/cart/CartItem";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronLeft } from 'react-icons/bi';
import { useEffect } from "react";
import { orderActions } from "../../redux/slices/orderSlice";
import { productActions } from "../../redux/slices/productSlice";
import { updateOrder } from "../../redux/apiCalls/orderApiCall";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";

function Checkout() {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.product.cartItems);
   console.log('cartItems',cartItems);

  const [shippingAddress, setShippingAddress] = useState({
    phone: "",
    firstName: "",
    lastName: "",
    country: "Lebanon", // Default value
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    
  });

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Collect order items from cart items
    const orderItems = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));
  
    const orderData = {
      shippingAddress,
      orderItems,
    };
  
    try {
      // Dispatch an action to update the order data in Redux state
      dispatch(updateOrder(orderData));
  
      // Reset cart items and order data
      // dispatch(productActions.clearCartItems());
      // dispatch(orderActions.clearOrder()); 
      navigate('/checkout-success', { state: { shippingAddress } });

    } catch (error) {
      console.error(error);
    }
  };
  

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const total = calculateTotal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="flex flex-col sm:flex-row p-4">
     <div id="formInfo" className="m-8 flex-1">
        <h2 className="text-3xl font-semibold">Siwar Bracelet</h2>
        <div className="flex flex-row items-center gap-2 mb-8 text-sm">
          <Link to={`/cart`} className="text-red-400">{t("checkout.cartLink")}</Link>
          <BiChevronRight />
          <p className="font-bold">{t("checkout.shippingLink")}</p>
        </div>

        <div className="mt-4 mb-8">
          <h2 className="text-2xl font-bold ">{t("checkout.contact")}</h2>
          <div className="sm:col-span-4">
            <div className="mt-2">
              <input
                placeholder="Phone number"
                onChange={handleShippingAddressChange}
                id="phone"
                name="phone"
                type="phone"
                autoComplete="phone"
                className="px-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12 mt-4">
          <h1 className=" font-bold leading-7 text-xl">{t("checkout.shippingAddress")}</h1>
          <p className="mt-1 text-sm leading-6 text-gray-600">
          {t("checkout.usePermanentAddress")}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder="First name"
                  onChange={handleShippingAddressChange}
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="given-name"
                  className="px-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <input
                  placeholder="Last name"
                  onChange={handleShippingAddressChange}
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  autoComplete="family-name"
                  className="px-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  required
                  autoComplete="country-name"
                  className="px-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Lebanon</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <div className="mt-2">
                <input
                  placeholder="Address"
                  onChange={handleShippingAddressChange}
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                  required
                  className="px-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <div className="mt-2">
                <input
                  placeholder="City"
                  onChange={handleShippingAddressChange}
                  type="text"
                  name="city"
                  id="city"
                  required
                  className="px-2  block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2">
                <input
                  placeholder="State "
                  onChange={handleShippingAddressChange}
                  type="text"
                  name="state"
                  id="state"
                  required
                  className="px-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mt-2">
                <input
                  placeholder=" ZIP / Postal code"
                  onChange={handleShippingAddressChange}
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  autoComplete="postalCode"
                  required
                  className="px-2 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-4">
              
              <button type="submit" onClick={handleSubmit} className='px-8  hover:bg-sky-700  bg-steel text-white py-4   rounded-lg font-semibold   transition-transform transform hover:scale-105'>
              {t("checkout.placeOrder")}
              </button>
            </div>
          </div>
        </div>
      </div> 

      <div id="productInfo" className=" flex-2 bg-gray-100 w-[600px] border-2">
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-row gap-2 m-6 justify-between items-center">
            <div className="flex gap-4">
                <img className="w-14 h-14 rounded-md" src={item.image} alt={item.name} />
                <span className="p-1 -ml-4 -mt-2 bg-steel text-white rounded-full text-xs flex items-center justify-center w-5 h-5">
                    {item.quantity}
                </span>
                <div className="flex flex-col">
                <span className= "hover:underline cursor-pointer">{item.name}</span>

                <div className="flex gap-2 items-center " >
                    <span className="item-quantity">x{item.quantity}</span>
                    
                </div>
                </div>
          </div>
          <span className="item-price text-xl">${item.price * item.quantity}</span>

        </div>
      ))}
        <div className="flex items-center justify-between px-8">
            <p>{t("checkout.subtotal")}</p>
            <span className="text-xl">{total} $</span>
        </div>

        <div className="flex items-center justify-between px-8">
            <p>{t("checkout.shippingLink")}</p>
            <span className="text-gray-500 text-sm">{t("checkout.shippingCalc")}</span>
        </div>

        <div className="flex items-center justify-between px-8 text-xl mt-4 font-semibold">
            <p className="">{t("checkout.total")}</p>
            <span className="text-xl">{total} $</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
