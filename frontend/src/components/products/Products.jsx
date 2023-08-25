import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/apiCalls/productApiCall";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Products() {
  const { slug } = useParams();

  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [slug]);

  return (
    <div>
      <div className="bg-blue text-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="group relative transition-transform duration-300 hover:scale-105"
              >
                <Link to={`/product-detail/${product.slug}`}>
                  <div className="aspect-h-1 aspect-w-1 cursor-pointer w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full cursor-pointer object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </Link>

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm ">
                      <Link
                        to={`/product-detail/${product.slug}`}
                        className="hover:underline"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 "
                        />
                        {product.name}
                      </Link>
                    </h3>
                    <div className="flex flex-row gap-4">
                      {product.discount > 0 && (
                        <span className="mt-1 px-2 py-1 bg-indigo-800 text-white text-xs font-semibold rounded">
                          Sale {product.discount}% OFF
                        </span>
                      )}
                      <del className="mt-1 text-sm text-gray-400">
                        {product.price} USD
                      </del>
                      <p className="mt-0.5  font-semibold">
                        {product.price - (product.price * product.discount) / 100}{" "} USD
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
