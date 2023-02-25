import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'
import Profile from './Profile'

function Dashboard() {
  const { username } = useContext(AuthContext);
  return (
    <div>
        {username}, Welcome to the Dashboard
        <Profile />    
        </div>
  )
}

export default Dashboard