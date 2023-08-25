import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSliders } from '../../redux/apiCalls/slidersApiCall';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Collection() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector(state => state.slider.categories);

  useEffect(() => {
    dispatch(getSliders());
  }, []);

  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="bg-white dark:text-gray-100 dark:bg-blue">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <Link
                to={`products-list/${category.slug}`}
                key={category.id}
                className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[500px] w-full object-cover transform transition ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                <div className="p-4 flex items-center justify-center absolute inset-0">
                  <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600 dark:bg-gray-900/90 dark:border-gray-800">
                    {category.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  );
}

export default Collection;
