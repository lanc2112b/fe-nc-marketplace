import { useState } from "react";
import ItemList from "./ItemList";
import AddItem from "./AddItem";
import ViewItem from "./ViewItem";
import { Routes, Route } from "react-router-dom";
import Filter from "./Filter";

const MainSection = () => {
  const [category, setCategory] = useState("");

  return (
    <main>
      <div id="category-selector">
        <Filter setCategory={setCategory} />
      </div>
      <Routes>
        <Route path="/products" element={<ItemList category={category} />} />
        <Route path="/products/add/item" element={<AddItem />} />
        <Route path="/products/:item_id" element={<ViewItem />} />
      </Routes>
    </main>
  );
};

export default MainSection;
