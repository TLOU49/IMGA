import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './pages/Home.jsx'
import LogIn from './components/LogIn.jsx'
import MainLayout from './components/layouts/MainLayout.jsx'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate} from 'react-router-dom';
import ImageUpload from './pages/ImageUpload.jsx'
import LogOut from './components/LogOut.jsx'
import RegisterProfile from './pages/RegisterProfile.jsx'
import { UserProvider } from './Context/useAuth.jsx'
import { ResetPassword } from './pages/ResetPassword.jsx'
import { ForgotPassword } from './pages/ForgotPassword.jsx'
import MyLIbrary from './pages/MyLIbrary.jsx'
import { TwoFactorAuthPage } from './pages/TwoFactorAuthPage.jsx'
import { LoggedInResetPassword } from './pages/LoggedInResetPassword.jsx'

const isAuthenticated = !!localStorage.getItem('token');
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    < Route element={<MainLayout/>} >
    <Route path='/home' index element={<Home/>}/>
    <Route path='/upload' element={<ImageUpload/>}/>
    <Route path='/logout' element={<LogOut/>}/>
    <Route path='/library' element={<MyLIbrary/>}/>

    </Route>
    <Route path='/' element={<LogIn/>}>
    <Route path='/login' element={<LogIn/>}/>
    </Route>
    <Route path='/2fa' element={<TwoFactorAuthPage/>}/>
    <Route path='/register' element={<RegisterProfile/>}/>
    <Route path='/reset-password' element={<ResetPassword/>}/>
    <Route path='/forgot-password' element={<ForgotPassword/>}/>
    <Route path='/user-reset' element={<LoggedInResetPassword/>}/>

    </>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <UserProvider>
    <App />
    </UserProvider>
    </RouterProvider>
  </React.StrictMode>,
)
