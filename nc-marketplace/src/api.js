import axios from 'axios';


const marketPlaceApi = axios.create({
  baseURL: "https://nc-marketplace-sem-2.onrender.com/api/",
});

export const fetchItems = (category = null) => {

  const filterURL = (category) ? `?category_name=${category}` : '';

  return marketPlaceApi.get(`/items${filterURL}`).then((results) => {
    return results.data.items;
  });
};

export const fetchCats = () => {
  return marketPlaceApi.get("/categories")
  .then((results) => {
    return results.data.categories;
  })
}