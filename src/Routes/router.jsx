import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../Home/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Services from "../Pages/Services";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: '/about',
            element:<About></About>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/services',
            element:<PrivateRoute><Services></Services></PrivateRoute>
        },
        {
          path: '/checkOut/:id',
          element:<CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      
      ]
    },
  ]);

  export default  router