import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Page/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      }
    ]
  },
]);

export default router;