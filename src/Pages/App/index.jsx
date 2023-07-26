import { useState } from 'react'
import './App.css'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'

function App() {

  return (
      <div className="bg-blue-600 text-lg text-white">
        <Home />
        <MyAccount/>
        <MyOrder/>
        <MyOrders/>
        <NotFound/>
      </div>
  )
}

export default App
