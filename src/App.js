import logo from './logo.svg';
import './App.css';
import { Button, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  //state - hooks
  const [name, setName] = useState("John Doe");
  const [todos, setTodos] = useState([]);

  // useEffect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodos(json))
      console.log(todos);
  })

  // Component lifecycle - 1. mounting 2. updating 3. unmounting

  return (
    <Container>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.title}</TableCell>
              <TableCell align="right"><Button variant='outlined'><EditIcon sx={{color: 'red'}}/></Button></TableCell>
              <TableCell align="right"><DeleteIcon sx={{color: 'red'}}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}

export default App;
