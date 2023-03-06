import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Componants/About/About';
import Catagory from '../Componants/Catagory/Catagory';
import Home from '../Componants/Home/Home';
import Login from '../Componants/Login/Login';
import News from '../Componants/News/News';
import Register from '../Componants/Register/Register';
import Main from '../Layout/Main/Main';


   export  const router =createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: ()=> fetch("http://localhost:5000/news")
                },
                {
                      path:"/catagoris/:id",
                      element:<Catagory></Catagory>,
                      loader:({params})=>fetch(`http://localhost:5000/catagory/${params.id}`)

                },
                {
                    path:'/news/:id',
                    element:<News></News>,
                    loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
                },
                {
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:"/login",
                    element:<Login></Login>
                },
                {
                    path:"/register",
                    element:<Register></Register>
                }
            ]
        }
    ]);



