import { useEffect, useState } from "react";
import { fetchCats } from "../api";
import FilterOption from "./FilterOption";

// let count = 0;

const Filter = ({ setCategory }) => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

  const selectHandler = (event) => {

    const selected = event.target.value;

    if (categories.find((obj) => {
        return obj.category_name === selected;
    })) {
      console.log(selected)
      setCategory(selected);
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
      <select onChange={selectHandler}>
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
