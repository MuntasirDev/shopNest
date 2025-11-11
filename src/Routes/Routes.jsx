import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Error from '../Pages/Error/Error';
import Auth from '../Pages/Auth/Auth';
import About from '../Pages/About';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,

    children: [
        {
            index: true,
            path:"/",
            Component:Auth
        }
    ]
  },
  {
    path: "/about",
    Component: About,
  }
]);