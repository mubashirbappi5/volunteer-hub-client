import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";

const Mainroutes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        path:"/",
        element:<Home/>
      }]
    },
  ]);
  export default Mainroutes
