import AdminRoot from "../components/admin/AdminRoot";
import SiteRoot from "../components/site/Siteroot";
import Home from "../components/site/home/Home";

export const Router = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },{
    path:'/admin',
    element : <AdminRoot/>
  }
];

