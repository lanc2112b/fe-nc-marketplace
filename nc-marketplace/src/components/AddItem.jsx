import Filter from './Filter'
import { useState } from 'react';
import { postNewItem } from '../api';

const AddItem = ({ setCategory, category }) => {
    
    const newItem = {
      item_name: "",
      description: "",
      img_url: "",
      price: "",
      category_name: "",
    };
    
    const [body, setBody] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();

        const itemTitle = event.target["item-name"].value;
        const itemDesc = event.target["item-desc"].value;
        const imgUrl = event.target["img-url"].value;
        const itemPrice = +event.target["price"].value;
        const itemCategory = category;
        const cats = ['Electronics', 'Household', 'Clothing'];
        let msg = '';

        if (!itemTitle) {
            msg += 'itemTitle is required '
        }

        if (!itemDesc) {
          msg += "itemDesc required";
        }

        if (!imgUrl) {  // || test regex for valid url
          msg += "invalid url";
        }

        if (!itemPrice || isNaN(itemPrice)) {
          // || test regex for valid url
          msg += "price required or not a number";
        }
        if (!cats.includes(itemCategory)) {
         msg += 'Not a valid category';
        }
        
        if (msg === '') {
            
            newItem.item_name = itemTitle;
            newItem.description = itemDesc;
            newItem.img_url = imgUrl;
            newItem.price = itemPrice;
            newItem.category_name = itemCategory;

            setBody(newItem);

            postNewItem(body);           

        }
        console.log(msg, "<<<< msg");     

    }
console.log(body);
    return (
      <section className="addItemForm">
        <form onSubmit={submitHandler}>
          <label htmlFor="item-name">Item Name</label>
          <input
            type="text"
            name="item-name"
            id="item-name"
            placeholder="Item Name"
          />
          <label htmlFor="item-desc">Item Description</label>
          <textarea
            name="item-desc"
            id="item-desc"
            placeholder="Item Description"
          ></textarea>
          <label htmlFor="img-url">Image URL</label>
          <input
            type="url"
            name="img-url"
            id="img-url"
            placeholder="Image URL"
          />
          <label htmlFor="price">Price (in pence)</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price in pence"
          />

          <label htmlFor="category-dropdown">Pick Category</label>
          <Filter setCategory={setCategory} />

          <button type="submit">Add Item</button>
        </form>
      </section>
    );
}

export default AddItem;