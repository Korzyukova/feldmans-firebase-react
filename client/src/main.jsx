import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import Clients from './pages/Clients/Clients'
import ContactUs from './pages/ContactUs/ContactUs'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ufeeesjva37mAR3zpqpAi30XNCcmTi4",
  authDomain: "feldmans-73cb5.firebaseapp.com",
  projectId: "feldmans-73cb5",
  storageBucket: "feldmans-73cb5.appspot.com",
  messagingSenderId: "938683646758",
  appId: "1:938683646758:web:6199e264850057298ab7e7",
  measurementId: "G-4XPW96J4M1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
