import { ShoppingCartProvider } from '../../Context'
import { useState } from 'react'
import {useRoutes, BrowserRouter} from 'react-router-dom'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SingIn } from '../SingIn'
import { NavBar } from '../../Components/NavBar'
import { CarSideMenu } from '../../Components/CarSideMenu/indes'


const AppRoutes = () => {

  let routes = useRoutes([
    {path:"/", element:<Home />},
    {path:'/my-order', element:<MyOrder />},
    {path:'my-orders', element:<MyOrders />},
    {path:'my-orders/last', element:<MyOrder />},
    {path:'my-orders/:id', element:<MyOrder />},
    {path:'my-account', element:<MyAccount />},
    {path:'/*', element:<NotFound />},
    {path:'/singin', element:<SingIn />},
  ])

  return routes
}


function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar/>
        <AppRoutes />
        <CarSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export  {App}
