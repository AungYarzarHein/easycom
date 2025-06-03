import React from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import "./App.css";
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store'



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
        <Provider store={store} >
          <RouterProvider router={router} /> 
        </Provider>
      </QueryClientProvider>
  )
}

export default App