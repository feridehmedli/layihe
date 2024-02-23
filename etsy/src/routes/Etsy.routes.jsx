import AdminRoot from "../components/admin/AdminRoot";
import Jewellery from "../components/site/jewelleryCategories/Jewellery";
import SiteRoot from "../components/site/Siteroot";
import Accessories from "../components/site/accessoriesCategory/Accessories";
import Home from "../components/site/home/Home";
import Login from "../components/site/login/Login";
import Register from "../components/site/register/Register";
import Wishlist from "../components/site/wishlist/Wishlist";
import HomeCategory from "../components/site/homeCategory/HomeCategory";
import ArtCategory from "../components/site/artCategory/ArtCategory";
import DetailPage from "../components/site/detailPage/DetailPage";
import BasketPage from "../components/site/basketPage/BasketPage";
import AddProduct from "../components/admin/addPage/AddProduct";
import AboutPage from "../components/site/aboutPage/AboutPage";

export const Router = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/accesories",
        element: <Accessories />,
      },
      {
        path: "/:id",
        element: <DetailPage />,
      },
      {
        path: "/jewellery",
        element: <Jewellery />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/homeCategory",
        element: <HomeCategory />,
      },
      {
        path: "/artCategory",
        element: <ArtCategory />,
      },
      {
        path: "/basket",
        element: <BasketPage />,
      },
      {
        path : '/about',
        element : <AboutPage/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
];
