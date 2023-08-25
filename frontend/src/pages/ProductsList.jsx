import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../redux/apiCalls/productApiCall';
import { Link, useParams } from 'react-router-dom';
import { createSelector } from 'reselect';

function ProductsList() {
  const { slug } = useParams()
  const dispatch = useDispatch();
  
  
  // Selector for all products in the store
  const allProductsSelector = state => state.product.products;

  // Memoized selector for filtered products based on the category slug
  const filteredProductsSelector = createSelector(
    allProductsSelector,
    products => products.filter(product => product.category.slug === slug)
  );

  // Fetch filtered products using the memoized selector
  const products = useSelector(filteredProductsSelector);


  const [currentPage, setCurrentPage] = useState(1); 

  // Set the number of products per page
  const productsPerPage = 8; // Adjust as needed
  // Calculate the total number of pages
  const totalPages = Math.ceil(products.length / productsPerPage);


  
  useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(getProducts())
  },[dispatch]);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToPreviousPage = () => {
    goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          {slug}
          </h2>
          <div className="mt-8">
            <p className="text-sm text-gray-500">Showing <span> {productsPerPage}  </span> of {products.length}</p>
          </div>

        </header>

        <div className="mt-8 sm:flex sm:items-center sm:justify-between">
          <div className="block sm:hidden">
            <button
              className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            >
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="hidden sm:flex sm:gap-4">
            <div className="relative">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                >
                  <span className="text-sm font-medium"> Availability </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div
                  className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                >
                  <div className="w-96 rounded border border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700"> 0 Selected </span>

                      <button
                        type="button"
                        className="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <ul className="space-y-1 border-t border-gray-200 p-4">
                      <li>
                        <label
                          htmlFor="FilterInStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterInStock"
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            In Stock (5)
                          </span>
                        </label>
                      </li>

                     
                      <li>
                        <label
                          htmlFor="FilterOutOfStock"
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="FilterOutOfStock"
                            className="h-5 w-5 rounded border-gray-300"
                          />

                          <span className="text-sm font-medium text-gray-700">
                            Out of Stock (10)
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </details>
            </div>

            <div className="relative">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                >
                  <span className="text-sm font-medium"> Price </span>

                  <span className="transition group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </summary>

                <div
                  className="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
                >
                  <div className="w-96 rounded border border-gray-200 bg-white">
                    <header className="flex items-center justify-between p-4">
                      <span className="text-sm text-gray-700">
                        The highest price is $600
                      </span>

                      <button
                        type="button"
                        className="text-sm text-gray-900 underline underline-offset-4"
                      >
                        Reset
                      </button>
                    </header>

                    <div className="border-t border-gray-200 p-4">
                      <div className="flex justify-between gap-4">
                        <label
                          htmlFor="FilterPriceFrom"
                          className="flex items-center gap-2"
                        >
                          <span className="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceFrom"
                            placeholder="From"
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>

                        <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">$</span>

                          <input
                            type="number"
                            id="FilterPriceTo"
                            placeholder="To"
                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>

          <div className="hidden sm:block " >
            <label htmlFor="SortBy" className="sr-only">SortBy</label>

            <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
              <option>Sort By</option>
              <option value="Title, DESC">Title, DESC</option>
              <option value="Title, ASC">Title, ASC</option>
              <option value="Price, DESC">Price, DESC</option>
              <option value="Price, ASC">Price, ASC</option>
            </select>
          </div>

         
        </div>
        {products.length == 0 ? (

            <div class="flex items-center justify-center flex-1">
                <div class="max-w-xl px-4 py-8 mx-auto text-center">
                  <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    No products.
                  </h1>

                  <p class="mt-4 text-gray-500">
                    Try searching again, or return home to start from the beginning.
                  </p>

                  <Link
                    to={`/`}
                    class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-blue rounded tranform hover:scale-105"
                  >
                    Go Back Home
                  </Link>
                </div>
            </div>

          ) : (
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map((product) => (
              <li key={product.id}>
                <Link to={`/product-detail/${product.slug}`} className="group block overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3
                      className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                    >
                      {product.name}
                    </h3>

                    <p className="mt-2">
                      <span className="sr-only"> Regular Price </span>
                      <span className="tracking-wider text-gray-900"> ${product.price} USD </span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
            </ul>

          )}
        

       {/* Pagination */}
        <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
            onClick={goToPreviousPage}
          >
            <span className="sr-only">Prev Page</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3  cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
            </svg>
          </a>
        </li>

        {/* Generate page number links */}
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <a
              className={`block cursor-pointer h-8 w-8 rounded ${
                index + 1 === currentPage ? 'border-black bg-black text-white' : 'border-gray-100'
              } text-center leading-8`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </a>
          </li>
        ))}

        <li>
          <a
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
            onClick={goToNextPage}
          >
            <span className="sr-only ">Next Page</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3  cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
            </svg>
          </a>
        </li>
      </ol>

      </div>
    </section>
  )
}

export default ProductsList
