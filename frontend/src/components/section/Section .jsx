import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/apiCalls/productApiCall";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Section() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products.slice(0, 2)); // Get the first 2 products

  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <header>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Necklaces
                  </h2>
                  <p className="mt-4 text-gray-500">
                  Discover our exquisite collection of necklaces that effortlessly combine elegance and style.
                   Elevate your look with our handcrafted necklaces designed to make a statement.
                  </p>
                </header>
                <a
                  href="#"
                  className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
                >
                  Shop All
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {products.map((product) => (
                  <li key={product.id}>
                    <a href="#" className="block group">
                      <img
                        src={product.image}
                        alt="eee"
                        className="object-cover w-full rounded aspect-square"
                      />
                      <div className="mt-3">
                        <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-700">
                          ${product.price}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
