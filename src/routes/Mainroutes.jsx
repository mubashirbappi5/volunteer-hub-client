import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Allvolunteerposts from "../pages/Allvolunteerposts";
import PostDetails from "../pages/PostDetails";
import AddNeedPost from "../pages/AddNeedPost";
import MypostSManage from "../pages/MypostSManage";
import BeAvolunteer from "../pages/BeAvolunteer";
import Privateroute from "./Privateroute";
import ErrorPage from "../pages/ErrorPage";

const Mainroutes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>,
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
      element:<Privateroute><PostDetails/></Privateroute>,
      loader:({params})=>fetch(`http://localhost:8000/posts/${params.id}`)
      
    },
    {
      path:'/addpost',
      element:<Privateroute><AddNeedPost/></Privateroute>
    },
    {
      path:'/mypostmanage',
      element:<Privateroute><MypostSManage/></Privateroute>
    },
    {
      path:'/bevolunteer/:id',
      element:<Privateroute><BeAvolunteer/></Privateroute>,
      loader:({params})=>fetch(`http://localhost:8000/posts/${params.id}`)
    }
    ]
    },
  ]);
  export default Mainroutes
