import { useParams } from "react-router-dom";
import {getItemById} from "../api"
import { useState, useEffect } from "react";

const ViewItem = () => {
const { item_id } = useParams();

const [item, setItem] = useState({})

useEffect(() => {
    getItemById(item_id).then((results) => {
        setItem(results);
        console.log(results)
    })
}, []);

const {img_url, item_name, description, price} = item

    return (
        <section> 
             <article>
          
            <img src={img_url} alt="" />
          
          <h3>{item_name}</h3>
          <p>
            {description}
             read more 
          </p>
          <div>
            <p className="price">{(price / 10).toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        </article>
        </section>
    )
}

export default ViewItem;

