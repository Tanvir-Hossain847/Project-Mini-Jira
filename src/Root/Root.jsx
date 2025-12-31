import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layout/HomeLayout';
import AuthLayout from '../Layout/AuthLayout';
import Home from '../Page/Home/Home';
import Login from '../Page/Auth/Login';
import Registration from '../Page/Auth/Registration';
import ForgotPassword from '../Page/Auth/ForgotPassword';

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
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>
      }
    ]
  },
]);

export default router;