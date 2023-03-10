import { useEffect, useState } from "react";
import { fetchItems } from "../api";
import ItemCard from "./ItemCard";


const ItemList = ({ category }) => {
  const [items, setItems] = useState(null);


  useEffect(() => {
    fetchItems(category).then((results) => {
      setItems(results);
    });
  }, [items]);

  if (!items) return <p>Loading...</p>;

  return (
      <section id="product-list">

          <ul>
      {items.map((element) => {
         return <ItemCard key={element.item_id} item={element} />;
      })}
          </ul>
    </section>
  );
};

export default ItemList;
