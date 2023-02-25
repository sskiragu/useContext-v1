import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('Sam')
    const [password, setPassword] = useState("123")

    const login = (e) => {
        e.preventDefault()
        console.log(username);
    }
  return (
    <Box
      component="form"
      onSubmit={login}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="username"
          label="Username"
          value={username}
          onChange={k => setUsername(k.target.value)}
        />
        </div>
      <div>
        <TextField
          id="password"
          label="Password"
          value={password}
          onChange={k => setPassword(k.target.value)}
        />
      </div>
      <div>
        <Button variant='outlined' type='submit'>Login</Button>
      </div>
    </Box>
  )
}

export default Login