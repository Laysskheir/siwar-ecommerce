import React from "react";
import CartItem from "../components/cart/CartItem";
import Summary from "../components/cart/Summary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Cart() {
  const { t } = useTranslation();
  const cartItems = useSelector((state) => state.product.cartItems);

  return (
    <div className="w-full md:py-20 flex flex-col items-center sm:mt-8">
      {/* Title and Continue Shopping */}
      <div className="text-black font-light md:max-w-6xl text-3xl w-full flex items-center justify-between p-8 mt-8 sm:mt-8">
        <p className="mr-4 text-4xl">{t("cart.title")}</p>
        <Link
          to={`/products-list`}
          className="text-sm underline cursor-pointer hover:underline-offset-2"
        >
          {t("cart.continueShopping")}
        </Link>
      </div>

      {/* Cart content */}
      <div className="w-full md:max-w-6xl p-4 md:p-8 rounded-lg bg-white mt-8">
        {cartItems.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b text-gray-400">
                <th className="py-3 px-4 text-left font-semibold">
                  {t("cart.product")}
                </th>
                <th className="py-3 px-4 text-left font-semibold">
                  {t("cart.quantity")}
                </th>
                <th className="py-3 px-4 text-left font-semibold">
                  {t("cart.total")}
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  discount={item.discount}
                  quantity={item.quantity}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <h1 className="m-4 p-3 text-4xl">{t("cart.emptyCart")}</h1>
            <Link
              to="/"
              className="bg-blue text-light m-4 py-3 px-8"
            >
              {t("cart.continueShoppingButton")}
            </Link>
          </div>
        )}
        {cartItems.length > 0 && <Summary />}
      </div>
    </div>
  );
}

export default Cart;
