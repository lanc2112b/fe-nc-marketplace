import { useEffect, useState } from "react";
import { fetchItems } from "../api";
import ItemCard from "./ItemCard";
import Filter from "./Filter"

const ItemList = () => {
  const [items, setItems] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchItems().then((results) => {
      setItems(results);
    });
  }, [items]);

  if (!items) return <p>Loading...</p>;

  return (
      <section id="product-list">
 <Filter setCategory = {setCategory}/>
          <ul>
      {items.map((element) => {
         return <ItemCard key={element.item_id} item={element} />;
      })}
          </ul>
    </section>
  );
};

export default ItemList;
