import BaseUrl from "./BaseUrl";
import axios from "axios";

const token = localStorage.getItem("token");

const LocationApis = {
  getAllLockersByLocation: async () => {
    const response = await axios.get(`${BaseUrl}/products`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { data: products } = response;

    console.log("inside the GETALLPRODUCTS function", response);

    return products;
  },

  getAllLockersByLocation: async () => {
    const { data: lockers } = await axios.get(
      `${BaseUrl}/api/locker/Lekki`,
    );

    return lockers;
  },

  searchProductByParams: async (params) => {
    const { data: searchedProducts } = await axios.get(
      `${BaseUrl}/products/search?keyword=${params}`
    );

    return searchedProducts;
  },

  getAllProductsInCart: async () => {
    const response = await axios.get(`${BaseUrl}/products/allCartItems`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const { data: itemsInCartDB } = response;

    console.log("inside the GETALLPRODUCTSINCART function", response);

    return itemsInCartDB;
  },

  addProductToCart: async function addToCart(id) {
    try {
      const response = await fetch(
        `http://localhost:8045/products/add-to-cart/${id}`,
        {
          method: "POST",
          body: JSON.stringify({
            productId: id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      //   alert("Item Added To Cart");
      console.log(data);
    } catch (err) {
      // alert("Something Went Wrong");
      console.log(err);
    }
  },

  deleteProductFromCart: async function deleteFromCart(id) {
    try {
      const response = await fetch(
        `http://localhost:8045/products/delete/${id}`,
        {
          method: "DELETE",
          body: JSON.stringify({
            productId: id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      //   alert("Item Added To Cart");
      console.log(data);
    } catch (err) {
      //   alert("Something Went Wrong");
      console.log(err);
    }
  },

  addProductToFavorite: async function addToFavorite(id) {
    try {
      const response = await fetch(
        `http://localhost:8045/api/customer/favorite/${id}`,
        {
          method: "POST",
          body: JSON.stringify({
            productId: id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await response.json();
      //   alert("Item Added To Cart");
      console.log(data);
    } catch (err) {
      // alert("Something Went Wrong");
      console.log(err);
    }
  },
};

export default LocationApis;
