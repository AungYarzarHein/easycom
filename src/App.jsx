import React from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import "./App.css";
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



const queryClient = new QueryClient();



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
      },
      {
        path: "products/:id",
        Component: ProductDetails
      }
    ]
  },
 
 ])

  return (
     
      <QueryClientProvider client={queryClient} >
        <RouterProvider router={router} /> 
      </QueryClientProvider>
  )
}

export default App