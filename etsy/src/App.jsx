import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Router } from "./routes/etsy.routes";
import "./App.css";
import { Toaster, toast } from "react-hot-toast";
import { MainContext } from "./context/Context";
import axios from "axios";

const router = createBrowserRouter(Router);

function App() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/recentlyFavourited").then((res) => {
      setData(res.data);
    });
  }, []);

  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : []
  );
  const [basketItems, setBasketItems] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );

  const handleAddWishlist = (item) => {
    const target = wishlist.find((prod) => prod._id === item._id);
    if (target) {
      toast.error("Item is already in the wishlist");
    } else {
      setWishlist([...wishlist, item]);
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, item]));
      toast.success("Item was added to the wishlist");
    }
  };

  const handleDeleteWishlist = (id) => {
    const target = wishlist.find((prod) => prod._id === id);
    wishlist.splice(wishlist.indexOf(target), 1);
    setWishlist([...wishlist]);
    localStorage.setItem("wishlist", JSON.stringify([...wishlist]));
    toast.error("Item was deleted from the wishlist");
  };


  const handleAddToBasket = (item) => {
    const target = basketItems.find((prod) => prod._id == item._id);
    if (!target) {
      const newBasket = {
        _id: item._id,
        count: 1,
        item: item,
        totalPrice: item.price,
      };
      setBasketItems([...basketItems, newBasket]);
      localStorage.setItem(
        "basketItems",
        JSON.stringify([...basketItems, newBasket])
      );
      toast.success("Item was added to basket")
    } else {
      const target = basketItems.find((myitem) => myitem.item._id == item._id);
      target.count += 1;
      target.totalPrice = target.item.price * target.count;
      setBasketItems([...basketItems]);
      localStorage.setItem("basketItems", JSON.stringify([...basketItems]));
    }
  };
  const decreaseFromBasket = (item) => {
    const target = basketItems.find((myitem) => myitem.item._id == item._id);
    target.count -= 1;
    target.totalPrice = target.item.price * target.count;
    setBasketItems([...basketItems]);
    localStorage.setItem("basketItems", JSON.stringify([...basketItems]));
  };
  const removeFromBasket = (item) => {
    const target = basketItems.find((myitem) => myitem._id == item._id);
    basketItems.splice(basketItems.indexOf(target), 1);
    setBasketItems([...basketItems]);
    localStorage.setItem("basketItems", JSON.stringify([...basketItems]));
  };
  const values = { data, handleAddWishlist, handleDeleteWishlist, wishlist,handleAddToBasket,basketItems,decreaseFromBasket,removeFromBasket };

  return (
    <>
      <MainContext.Provider value={values}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </MainContext.Provider>
    </>
  );
}

export default App;
