import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";

import Home from "../../Pages/Home/Home/Home";
import CheckOut from "../../Pages/Home/ProductsList/CheckOut";
import ProductDetails from "../../Pages/Home/ProductsList/ProductDetails";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Order from './../../Pages/Order/Order';
import Dashboard from './../../Pages/Dashboard/Dashboard/Dashboard';
import DashboardLayout from "../../Layout/DashboardLayout";
import OrderList from "../../Pages/Dashboard/OrderList/OrderList";
import About from "../../Pages/About/About";

const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/details',
                element:<ProductDetails></ProductDetails>
            },
            {
                path:'/order',
                element:<PrivateRoute><Order></Order></PrivateRoute>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
            },
           
        ]
    },

    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path:'orderlist',
                element:<OrderList></OrderList>
                
            }
        ]
    }
])
export default router;