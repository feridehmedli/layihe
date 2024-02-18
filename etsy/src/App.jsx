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
    axios.get("http://localhost:8080/jewellery").then((res) => {
      setData(res.data);
    });
  }, []);

  const [wishlist, setWishlist] = useState(
    localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : []
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

  const values = { data, handleAddWishlist, handleDeleteWishlist, wishlist };

  return (
    <>
      <MainContext.Provider value={values}>
        <RouterProvider router={router}>
        </RouterProvider>
        <Toaster />
      </MainContext.Provider>
    </>
  );
}

export default App;
