import React, { useEffect, useState } from "react";
import { getProductDetail } from "../../redux/apiCalls/productApiCall";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Products from "./Products";
import { productActions } from "../../redux/slices/productSlice";
import SideBar from "../sidebar/SideBar";
import Spinner from "../spinner/Spinner";
import { useTranslation } from "react-i18next";


function ProductDetail() {
  const { t } = useTranslation();

  const { slug } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const loading = useSelector((state) => state.product.loading);
  const productImages = useSelector((state) => state.product.productImages);

  const [imgHover, setImgHover] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    dispatch(getProductDetail(slug));
    window.scrollTo(0, 0);
  }, [dispatch, slug]);

  if (!product) {
    return <div className="bg-green">Loading...</div>;
  }

  const [showCartSidebar, setShowCartSidebar] = useState(false);

  // const toggleCartSidebar = () => {
  //     cartList ? setShowCartSidebar(false) : setShowCartSidebar(true);
  // }

  const toggleCartSidebar = () => {
    setShowCartSidebar(true);
  };

  const closeCartSidebar = () => {
    setShowCartSidebar(false);
  };
  return (
    <div className="">
      {showCartSidebar && <SideBar onClose={closeCartSidebar} />}

      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:gap-16 lg:items-center px-auto p-8 max-w-7xl text-light">
        <div className="flex flex-col justify-between gap-4 lg:w-2/4">
          {/* Display the main product image */}
          <img
            src={
              imgHover !== null ? productImages[imgHover].image : product.image
            }
            alt={product.name}
            className="w-full h-full aspect-square object-cover"
          />

          {/* Display other product images */}
          <div className="flex flex-row justify-between gap-6">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt={`Image ${index}`}
                className={`h-24 w-24 rounded-md ${
                  imgHover === index
                    ? "border-2 border-blue"
                    : "border-transparent"
                }`}
                onClick={() => setImgHover(index)}
              />
            ))}
          </div>
        </div>

        {/*Product info */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div className="">
            <span className="font-semibold text-gray-400">
              {product.category.name}
            </span>
            <h1 className="font-bold text-4xl text-gray-700">{product.name}</h1>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <del className="font-semibold text-gray-500 text-xl">
              {" "}
              USD {product.price}
            </del>
            <h3 className="font-semibold text-gray-700 text-2xl">
              {" "}
              USD {product.price - (product.price * product.discount) / 100}
            </h3>
            <span className="mt-1 px-2 py-1 bg-indigo-800 text-white text-xs font-semibold rounded">
              Sale {product.discount}% OFF
            </span>
          </div>
          <p className="text-gray-600">{product.description}</p>

          <div className="flex flex-col gap-4  ">
            <p className="text-gray-400">{t("cart.quantity")}</p>
            <div className="  max-w-[200px] flex flex-col sm:flex-row items-center sm:flex-wrap">
              <div className="flex items-center  border-2 border-blue justify-between">
                <button
                  className=" text-blue px-4 py-1   text-2xl "
                  onClick={() => {
                    if (amount > 1) {
                      setAmount(amount - 1);
                    }
                  }}
                >
                  -
                </button>

                <span className="text-black p-6 py-4 ">{amount}</span>
                <button
                  className=" text-blue px-3 py-1 rounded   text-2xl"
                  onClick={() => setAmount(amount + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className={`py-3 px-8 font-semibold border-blue border-2 text-blue transition-transform transform hover:scale-105 ${
                loading ? "disabled" : ""
              }`}
              onClick={() => {
                dispatch(productActions.setLoading());
                setTimeout(() => {
                  dispatch(
                    productActions.addProductToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      availability: product.availability,
                      description: product.description,
                      image: product.image,
                      discount: product.discount,
                      category: product.category,
                      quantity: amount,
                    })
                  );

                  dispatch(productActions.clearLoading());
                  toggleCartSidebar();
                  setShowCartSidebar(true); // Show the cart sidebar
                }, 1000);
              }}
            >
                {loading ? <Spinner /> : t("addToCart")}
              </button>
              <button className="bg-blue text-light py-3 px-8 transition-transform transform hover:scale-105">
                {t("buyNow")}
              </button>
          </div>
        </div>
      </div>

      {/* products related */}
      <div className="flex flex-col border-t-2 p-8 mt-8">
        <h2 className="text-2xl font-light tracking-tight text-gray-900 border-4 border-x-blue rounded-sm p-4">
        {t("relatedProducts.title")}
        </h2>
        <Products />
      </div>
    </div>
  );
}

export default ProductDetail;
