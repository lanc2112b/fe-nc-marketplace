import { useEffect, useState } from "react";
import {fetchCats} from "../api"
import FilterOption from "./FilterOption"


const Filter = ({setCategory}) => {
const [categories, setCategories] = useState(null)
const selectHandler = (event) => {
    const selected = event.target.value
    if (categories.find((obj)=> {
        return obj.category_name===selected
    }) ){
        console.log(selected)
    }
   
}

 useEffect(() => { 
    fetchCats().then((results) => {
        setCategories(results);
    })

 }, [categories])

 if (!categories) return <p>Loading...</p>

    return (
        <div>
            <select onChange={selectHandler}>
                {categories.map((category) => { 
                return <FilterOption key= {category.category_name} category = {category} />;
                })}
            </select>
        </div>
    )

}

export default Filter;