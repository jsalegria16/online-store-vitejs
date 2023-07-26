import { useState } from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import './App.css'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SingIn } from '../SingIn'

const AppRoutes = () => {

  let routes = useRoutes([
    {path:"/", element:<Home />},
    {path:'/my-order', element:<MyOrder />},
    {path:'my-orders', element:<MyOrders />},
    {path:'my-account', element:<MyAccount />},
    {path:'/*', element:<NotFound />},
    {path:'/singin', element:<SingIn />},
  ])

  return routes
}


function App() {
  console.log('hii?');
  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  )
}

export  {App}
