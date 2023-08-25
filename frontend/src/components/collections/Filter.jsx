import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSliders } from "../../redux/apiCalls/slidersApiCall";

function Filter() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.slider.categories);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    dispatch(getSliders());
  }, []);

  const handleCategoryChange = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== categoryName));
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  return (
    <form className=" border-t border-blue bg-blue px-auto w-[350px] text-white">
      <h3 className="p-2 underline">FILTER BY CATEGORIES</h3>
      <ul role="list" className="px-2 py-2 font-medium  flex  flex-col justify-center">
        {categories.map((category) => (
          <li key={category.name}>
            <label className="block px-2 py-3">
              <input
                type="checkbox"
                value={category.name}
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
              />
              {category.name}
            </label>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Filter;
