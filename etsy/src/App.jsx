import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Router } from "./routes/etsy.routes";
import "./App.css";

const router = createBrowserRouter(Router)

function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
