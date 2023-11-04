import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, ContactUs, Clients, AboutUs} from './pages'
import Header from './components/Header/Header'
import './style/index.css'
import Footer from './components/Footer/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-us',
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
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
