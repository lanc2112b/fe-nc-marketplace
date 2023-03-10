import { useEffect, useState } from "react";
import { fetchItems } from "../api";
import ItemCard from "./ItemCard";
import {Link} from 'react-router-dom'



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

          <ul value={items.length}>
      {items.map((element) => {
         return <ItemCard key={element.item_id} item={element} />;
      })}
          </ul>
          <Link to="/products/add/item">
          <button className="addButton">+</button>
          </Link>
    </section>
  );
};

export default ItemList;
