import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register';
import TestForm1 from './components/TestForm1/TestForm1';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      }, 
      {
        path: '/testform1',
        element: <TestForm1></TestForm1>
      },
      {
        path:'/login',
        element: <Login></Login>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
