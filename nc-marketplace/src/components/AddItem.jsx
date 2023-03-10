import Filter from './Filter'

const AddItem = ({setCategory}) => {


    return (
        <section className="addItemForm">
            <form>
                <label htmlFor="item-name">Item Name</label>
                <input type="text" name="item-name" id="item-name" placeholder="Item Name" />
                <label htmlFor="item-desc">Item Description</label>
                <textarea name="item-desc" id="item-desc" placeholder="Item Description"></textarea>
                <label htmlFor="img-url">Image URL</label>
                <input type="url" name="img-url" id="img-url" placeholder="Image URL" />
                <label htmlFor="price">Price (in pence)</label>
                <input type="number" name="price" id="price" placeholder="Price in pence" />
                <Filter setCategory={setCategory}/>

            </form>
        </section>
    )
}

export default AddItem;