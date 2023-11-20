import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/MenuSection/Menu";
import Order from '../Pages/Order/Order/Order'
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import DashBoard from "../Layouts/DashBoard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute'
import AllUser from "../Pages/Dashboard/AllUser";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/ManageItem/ManageItem";
import Payment from "../Pages/Dashboard/Payment/Payment";

 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path : "/menu",
          element: <Menu></Menu>
        },
        {
          path : "/order/:category",
          element: <Order></Order>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/signup",
          element: <Registration></Registration>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path: "cart",
          element: <Cart></Cart>
        },
        {
          path: "myPayment",
          element: <Payment></Payment>
        },

        // admin roles
        {
          path: "allUsers",
          element: <AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path: "addItems",
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: "manageItem",
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        }
      ]
    }
  ]);