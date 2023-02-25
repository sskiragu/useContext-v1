// import { Link } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import Dashboard from './Dashboard'
import Login from './Login'


function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("admin")
  return (
    <div>
      <AuthContext.Provider value={{isAuthenticated, username}}>
       <BrowserRouter>
       <Link to="/login">Login</Link>
        <Routes>
          <Route path="/login" element={<Login />}/>
        </Routes>
       </BrowserRouter>
       </AuthContext.Provider>
        </div>
  )
}

export default Home