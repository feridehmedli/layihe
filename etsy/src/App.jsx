import React, { useState ,useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Router } from "./routes/etsy.routes";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { MainContext } from "./context/Context";
import axios from "axios";

const router = createBrowserRouter(Router);

function App() {
  const [data,setData] = useState()
  useEffect(()=>{
    axios.get("http://localhost:8080/recentlyfavourited/").then((res)=>{
      setData(res.data)
    })
  },[])
  const values = {data}
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
