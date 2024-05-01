import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../Home/Home";
import About from "../Pages/About";


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
      
      ]
    },
  ]);

  export default  router