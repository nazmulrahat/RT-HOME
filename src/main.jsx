import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './comonents/Root';
import Home from './comonents/home';
import Login from './comonents/Login';
import Register from './comonents/Register';
import AuthProvider from './comonents/providers/AuthProvider';
import Oders from './comonents/Oders';
import PrivetRouts from './comonents/routs/PrivetRouts';
import Profile from './comonents/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },

      {
        path: '/oders',
        element: <PrivetRouts><Oders></Oders></PrivetRouts>
      },
      {
        path: '/profile',
        element: <PrivetRouts><Profile></Profile></PrivetRouts>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
