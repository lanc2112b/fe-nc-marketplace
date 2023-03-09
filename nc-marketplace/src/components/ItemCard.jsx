import { Link } from 'react-router-dom';

//TODO: Price disply

const ItemCard = ({ item }) => {
    //destructure here
    const { description, img_url, item_name, price, item_id } = item;
    return (
      <li>
        <article>
          <Link to={`/products/${item_id}`}>
            <img src={img_url} alt="" />
          </Link>
          <h3>{item_name}</h3>
          <p>
            {description}
            <Link to={`/products/${item_id}`}> read more </Link>
          </p>
          <div>
            <p className="price">{price / 10}</p>
            <button>quick add</button>
          </div>
        </article>
      </li>
    );


}



export default ItemCard;