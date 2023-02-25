import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

function Profile() {
  const {username} = useContext(AuthContext);
  return (
    <div>
        
        <h1>{username}, Your Profile </h1>
        </div>
  )
}

export default Profile