import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


export const UserProvider = ({ children}) => {

    const userDetails = () => {

    }
    
    return (
        <UserContext.Provider value={{ logout, logIn}}>{children}</UserContext.Provider>
    );
};


export const useAuth = () => React.useContext(UserContext);

// logout.js
export const logout = (navigate) => {
    localStorage.removeItem('token');
    navigate('/logout');
  };
  
export const api = 'http://localhost:5204/backend'
