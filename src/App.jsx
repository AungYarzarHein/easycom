import React, { useState } from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import "./App.css";
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { updateUserData } from './features/userSlice'
import Cart from './pages/Cart'



const queryClient = new QueryClient();



const Root = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user,setUser] = useState(false);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user.providerData[0])
        const data = user.providerData[0];
        dispatch(updateUserData(data));
        setUser(true);
        navigate("/")
      } 
    });

    return unSub;
  }, [])



  return (
    <div className="main">
      <Navbar user={user} />
      <Outlet />
    </div>
  )
}


const App = () => {
  


 const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path: "products",
        element: <ProductList />
      },
      {
        path: "products/:id",
        element: <ProductDetails />
      },
      {
        path:"cart",
        element: <Cart />
      }
    ]
  },
  {
    path:"/login",
    element: <LoginPage />
  },
  {
    path:"/register",
    element:<Register />
  }
 
 ])

  return (
     
      <QueryClientProvider client={queryClient} >
        <Provider store={store} >
        <ToastContainer autoClose={1000} hideProgressBar={true} className="myToast" position='top-center' />
          <RouterProvider router={router} /> 
        </Provider>
      </QueryClientProvider>
  )
}

export default App