import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Users from './Users';

const router = createBrowserRouter([
  {
      path:"/",
      element:<Home></Home>,
      children:[
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/users",
          element:<Users></Users>,
          loader : () => fetch("https://jsonplaceholder.typicode.com/users")
        }
      ]
      
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
