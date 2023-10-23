import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Clients from './pages/Clients/Clients'
import ContactUs from './pages/ContactUs/ContactUs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/aboutus',
    element: <AboutUs />,
  },
  {
    path: '/clients',
    element: <Clients />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
