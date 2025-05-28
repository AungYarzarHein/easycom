import React from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import "./App.css";
import ProductList from './pages/ProductList'


const Root = () => {
  return (
    <div className="main">
      <Navbar />
      <Outlet />
    </div>
  )
}


const App = () => {
  


 const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {
        index:true,
        Component: Home
      },
      {
        path: "products",
        Component: ProductList
      }
    ]
  },
 
 ])

  return (
     
      <RouterProvider router={router} />
  )
}

export default App