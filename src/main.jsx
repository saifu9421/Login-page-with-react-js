import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Submit from './components/Submit/Submit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },{
    path:"/signup",
    element:<Submit></Submit>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
