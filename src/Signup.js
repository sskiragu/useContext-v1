import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';

function Signup() {
    const [username, setUsername] = useState('Sam')
    const [email, setEmail] = useState("sam@gmail.com")
    const [password, setPassword] = useState("123")

    const register = e => {
        e.preventDefault()
        console.log(`Username: ${username} Email: ${email} Password: ${password}`);
        resetForm();
    }

    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
      }

  return (
    <>
    <h1>{username}</h1>
    <Box
      component="form"
      onSubmit={register}
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
          id="email"
          label="Email"
          value={email}
          onChange={k => setEmail(k.target.value)}
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
        <Button variant='outlined' type='submit'>Signup</Button>
      </div>
    </Box>
    </>
  );
}

export default Signup;