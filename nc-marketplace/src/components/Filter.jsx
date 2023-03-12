import { useEffect, useState } from "react";
import { fetchCats } from "../api";
import FilterOption from "./FilterOption";

// let count = 0;

const Filter = ({ setCategory }) => {
  
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectError, setSelectError] = useState(null);

  const selectHandler = (event) => {
    const selected = event.target.value;

    const foundCat = categories.find((obj) => {
      return obj.category_name === selected;
    });

    if (foundCat) {
      setSelectError(null);
      setCategory(selected);
    } else {
      setSelectError('Please select a valid category');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCats().then((results) => {
      setCategories(results);
      setLoading(false);
    });
  }, []); //// This! TODO

  // count++;
  // console.log(categories, count);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <label htmlFor="category-dropdown">
        Choose Category:{" "}
        <span className="error-text">
          {selectError ? `(${selectError})` : ""}
        </span>
      </label>
      <select
        onChange={selectHandler}
        id="category-dropdown"
        className={selectError && "error-field"}
        name="categorySelect"
      >
        <option>Select category...</option>
        {categories.map((element) => {
          return (
            <FilterOption key={element.category_name} category={element} />
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
