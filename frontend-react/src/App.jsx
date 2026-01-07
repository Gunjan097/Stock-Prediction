import { useState } from 'react'
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './components/Dashboard'
import PrivateRoutes from './PrivateRoutes'
import PubliceRoutes from './PublicRoute'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<PubliceRoutes><Register /></PubliceRoutes>} />
          <Route path="/login" element={<PubliceRoutes><Login /></PubliceRoutes>} />
          <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
