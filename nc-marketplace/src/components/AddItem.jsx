import Filter from "./Filter";
import { useState } from "react";
import { postNewItem } from "../api";

const AddItem = ({ setCategory, category }) => {
  // also changed names on form fields
  const [formData, setFormData] = useState({
    itemName: "",
    itemDesc: "",
    imgUrl: "",
    price: "",
  });

  const [titleError, setTitleError] = useState(null);
  const [descError, setDescError] = useState(null);
  const [urlError, setUrlError] = useState(null);
  const [priceError, setPriceError] = useState(null);

  const changeHandler = (event) => {
    //destructure field name & its value
    const { name, value } = event.target;

    /**
     * validate each field below...
     * */
    // itemName field
    if (name === "itemName") {
      if (value.length < 5) {
        setTitleError("Item name must be a minimum of 5 chars");
        console.log("below required length");
      } else {
        setTitleError(null);
      }
    }

    //item description
    if (name === "itemDesc") {
      if (value.length < 40 || value.length > 1000) {
        setDescError("Item description must be 40 & 1000 chars");
      } else {
        setDescError(null);
      }
    }

    //item image url
    if (name === "imgUrl") {
      if (!/(https?:\/\/.*\.(?:png|jpg))/.test(value)) {
        // not the best regex for this, but works
        setUrlError(
          "Item image url must be a valid resource of png or jpg/jpeg"
        );
      } else {
        setUrlError(null);
      }
    }

    //item price
    if (name === "price") {
      // mostly wont trigger unless someone deliberately edits the value in DOM
      if (isNaN(+value)) {
        setPriceError("Item price must be a valid number");
      } else {
        setPriceError(null);
      }
    }

    // spread old formdata into new object & apply new value to the corresponding key (name)
    setFormData((oldFormData) => ({ ...oldFormData, [name]: value }));

    // log to console, changes as they happen. (state updates with setFormData)
    //console.log(formData);
  };

  //const [body, setBody] = useState({});

  const submitHandler = (event) => {
    //stop form submission & redirection elsewhere
    event.preventDefault();

    /** Final validation before allowing submit */

    if (formData.itemName.length < 5) {
      setTitleError("Item name must be a minimum of 5 chars");
    } else {
      setTitleError(null);
    }

    //item description
    if (formData.itemDesc.length < 40 || formData.itemDesc.length > 1000) {
      setDescError("Item description must be 40 & 1000 chars");
    } else {
      setDescError(null);
    }

    //item image url
    if (!/(https?:\/\/.*\.(?:png|jpg))/.test(formData.imgUrl)) {
      // not the best regex for this, but works
      setUrlError("Item image url must be a valid resource of png or jpg/jpeg");
    } else {
      setUrlError(null);
    }

    //item price
    // mostly wont trigger unless someone deliberately edits the value in DOM
    if (isNaN(+formData.price)) {
      setPriceError("Item price must be a valid number");
    } else {
      setPriceError(null);
    }

    if (priceError || urlError || titleError || descError) {
      // do nothing for now, although we could trigger a message above the submit button, e.g 'Form has errors'
      return;
    }

    const newItem = {};

    newItem.item_name = formData.itemName;
    newItem.description = formData.itemDesc;
    newItem.img_url = formData.imgUrl;
    newItem.price = formData.price;
    newItem.category_name = category;

    postNewItem(newItem).then((result) => {
      if (result.status === 201) {
        /** trigger a success message for the user here */
        console.log("Your item was added to the listing");
        console.log(result.status);
      } else {
        /* or an error message here or preferrably in a catch block. */
        console.log(result.status);
      }
    });

    setFormData({
      itemName: "",
      itemDesc: "",
      imgUrl: "",
      price: "",
    });
    //console.log(newItem);
  };

  return (
    <section className="addItemForm">
      <form onSubmit={submitHandler}>
        <label htmlFor="item-name">
          Item Name{" "}
          <span className="error-text">
            {titleError ? `(${titleError})` : ""}
          </span>
        </label>
        <input
          type="text"
          name="itemName"
          id="item-name"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={changeHandler}
          className={titleError && "error-field"}
        />
        <label htmlFor="item-desc">
          Item Description{" "}
          <span className="error-text">
            {descError ? `(${descError})` : ""}
          </span>
        </label>
        <textarea
          name="itemDesc"
          id="item-desc"
          placeholder="Item Description"
          className={descError && "error-field"}
          value={formData.itemDesc}
          onChange={changeHandler}
        ></textarea>
        <span className="char-count">{`Character count: ${formData.itemDesc.length}`}</span>
        <label htmlFor="img-url">
          Image URL{" "}
          <span className="error-text">{urlError ? `(${urlError})` : ""}</span>
        </label>
        <input
          type="url"
          name="imgUrl"
          id="img-url"
          className={urlError && "error-field"}
          placeholder="Image URL"
          value={formData.imgUrl}
          onChange={changeHandler}
        />
        <label htmlFor="price">
          Price - in pence{" "}
          <span className="error-text">
            {priceError ? `(${priceError})` : ""}
          </span>
        </label>
        <input
          type="number"
          name="price"
          id="price"
          className={priceError && "error-field"}
          placeholder="Price in pence"
          value={formData.price}
          onChange={changeHandler}
        />

        <Filter setCategory={setCategory} />

        <button type="submit">Add Item</button>
      </form>
    </section>
  );
};

export default AddItem;
