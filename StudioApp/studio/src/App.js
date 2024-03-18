import React from 'react';
import './App.css';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './features/navbar/Navbar';
// import Navbar from './features/navbar/Navbar';

 



const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
   
  


])

function App() {
  return (
    <>
    {/* <Navbar/> */}
      <RouterProvider router={router} />
      {/* <Navbar/> */}
    </>
  );
}

export default App;
