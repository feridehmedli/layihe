import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Router } from "./routes/etsy.routes";
import "./App.css";
import {Toaster} from 'react-hot-toast'

const router = createBrowserRouter(Router)

function App() {
  return (
    <RouterProvider router={router}>
      <Toaster/>
    </RouterProvider>
  );
}

export default App;
