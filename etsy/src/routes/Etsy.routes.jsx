import AdminRoot from "../components/admin/AdminRoot";
import SiteRoot from "../components/site/Siteroot";
import Home from "../components/site/home/Home";
import Login from "../components/site/login/Login";
import Register from "../components/site/register/Register";

export const Router = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },{
        path : '/login',
        element :<Login/>
      },
      {
        path:'/register',
        element : <Register/>
      }
    ],
  },{
    path:'/admin',
    element : <AdminRoot/>
  }
];

