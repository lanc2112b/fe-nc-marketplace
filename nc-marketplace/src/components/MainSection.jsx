import ItemList from "./ItemList";
import AddItem from "./AddItem";
import ViewItem from "./ViewItem";
import { Routes, Route } from "react-router-dom";

const MainSection = () => {
    return (
      <main>
        <Routes>
          <Route path="/products" element={<ItemList />} />
          <Route path="/products/add/item" element={<AddItem />} />
          <Route path="/products/:item_id" element={<ViewItem />} />
        </Routes>
      </main>
    );
};

export default MainSection;
