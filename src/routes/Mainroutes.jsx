import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Allvolunteerposts from "../pages/Allvolunteerposts";
import PostDetails from "../pages/PostDetails";

const Mainroutes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        path:"/",
        element:<Home/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      }
    ,
      {
        path:'/register',
        element:<RegisterPage/>
      }
    ,
    {
      path:'/needposts',
      element:<Allvolunteerposts/>,
      loader:()=> fetch('http://localhost:8000/posts')
    },
    {
      path:'/postdetails/:id',
      element:<PostDetails/>,
      loader:({params})=>fetch(`http://localhost:8000/posts/${params.id}`)
      
    }
    ]
    },
  ]);
  export default Mainroutes
