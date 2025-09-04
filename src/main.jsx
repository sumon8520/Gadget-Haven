import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Errorpage from './Components/ErrorPage/Errorpage.jsx';
import './index.css'
import DashBorad from './Components/DashBorad/DashBorad.jsx';
import Statics from './Components/Statics/Statics.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <Errorpage></Errorpage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path :'statics',
        element : <Statics></Statics>
      },
     {
      path :'dashborad',
      element : <DashBorad></DashBorad>
     }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
