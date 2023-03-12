import { useState } from "react";
import ItemList from "./ItemList";
import AddItem from "./AddItem";
import ViewItem from "./ViewItem";
import { Routes, Route, useResolvedPath, Link } from "react-router-dom";
import Filter from "./Filter";

const MainSection = () => {
  const [category, setCategory] = useState("");
  const { pathname } = useResolvedPath();

  return (
    <main>
      {pathname === "/products" ? (
        <div id="category-selector">
          <Link to="/products/add/item" id="add-button-link">
            <button id="addButton">Add Item</button>
          </Link>
          <Filter setCategory={setCategory} />
        </div>
      ) : (
        ""
      )}
      <Routes>
        <Route path="/products" element={<ItemList category={category} />} />
        <Route
          path="/products/add/item"
          element={<AddItem setCategory={setCategory} category={category} />}
        />
        <Route path="/products/:item_id" element={<ViewItem />} />
      </Routes>
    </main>
  );
};

export default MainSection;
