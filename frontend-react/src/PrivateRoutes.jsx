import React, { Children, useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const PrivateRoutes = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    return isLoggedIn ? children : <Navigate to="/login" />
}

export default PrivateRoutes