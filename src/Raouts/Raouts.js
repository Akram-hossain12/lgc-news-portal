import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Componants/About/About';
import Catagory from '../Componants/Catagory/Catagory';
import Home from '../Componants/Home/Home';
import Login from '../Componants/Login/Login';
import News from '../Componants/News/News';
import Register from '../Componants/Register/Register';
import Main from '../Layout/Main/Main';
import Profile from '../Other/profileUpdete/Profile';
import TramsAndCondition from '../Other/TramsandCondition/TramsAndCondition';
import UpdeteProfile from '../Other/UpdeteProfile/UpdeteProfile';
import PrivateRoute from './PrivateRoute';


   export  const router =createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader: ()=> fetch("https://news-prtal-app-server.vercel.app/news")
                },
                {
                      path:"/catagoris/:id",
                      element:<Catagory></Catagory>,
                      loader:({params})=>fetch(`https://news-prtal-app-server.vercel.app/catagory/${params.id}`)

                },
                {
                    path:'/news/:id',
                    element: <PrivateRoute><News></News></PrivateRoute>,
                    loader:({params})=>fetch(`https://news-prtal-app-server.vercel.app/news/${params.id}`)
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
                },
                {
                    path:'/tarms',
                    element:<TramsAndCondition></TramsAndCondition>
                },
                {
                    path:'/profile',
                    element:<PrivateRoute><Profile></Profile></PrivateRoute>
                },
                {
                    path:'/updeteProfile',
                    element:<PrivateRoute><UpdeteProfile></UpdeteProfile></PrivateRoute>
                },
            ]
        }
    ]);



