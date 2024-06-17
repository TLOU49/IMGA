import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './pages/Home.jsx'
import LogIn from './components/LogIn.jsx'
import MainLayout from './components/layouts/MainLayout.jsx'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import ImageUpload from './pages/ImageUpload.jsx'
import LogOut from './components/LogOut.jsx'
import RegisterProfile from './pages/RegisterProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    < Route path='/' element={<MainLayout/>} >
    <Route path='/home' index element={<Home/>}/>
    <Route path='/upload' element={<ImageUpload/>}/>
    <Route path='/logout' element={<LogOut/>}/>
    </Route>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/register' element={<RegisterProfile/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
