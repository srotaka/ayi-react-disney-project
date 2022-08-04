import React from 'react';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(index = 0, tutorial = '', link = '') {
  return { index, tutorial, link }
}

const rows = [
  createData(1, 'Lumiere', 'https://static.wikia.nocookie.net/disney/images/f/f5/Profile_-_Lumiere.jpeg'),
  createData(2, 'Scrooge McDuck', 'https://static.wikia.nocookie.net/disney/images/0/0a/Scrooge_McDuck.jpeg'),
  createData(3, 'Lightning McQueen', 'https://static.wikia.nocookie.net/disney/images/4/46/Profile_-_Lightning_McQueen.jpg'),
  createData(4, 'Meeko', 'https://static.wikia.nocookie.net/disney/images/f/ff/Meeko_%28Pocahontas%29.jpg'),
  createData(5, 'Gladstone Gander', 'https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg'),
  createData(6, 'Mickey Mouse', 'https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg'),
  createData(7, 'Minnie Mouse', 'https://static.wikia.nocookie.net/disney/images/3/36/Minnie_Mouse_pose_.jpg'),
  createData(8, 'Mowgli', 'https://static.wikia.nocookie.net/disney/images/3/3a/Profile_-_Mowgli.jpeg'),
  createData(9, 'Nala', 'https://static.wikia.nocookie.net/disney/images/5/55/Profile_-_Nala.jpeg'),
  createData(10, 'Beardini the Pirate Magician', 'https://static.wikia.nocookie.net/disney/images/2/27/Beardini01.jpg',),
  createData(11, 'Kaa', 'https://static.wikia.nocookie.net/disney/images/f/f8/Profile_-_Kaa.jpeg'),
  createData(12, 'Beast', 'https://static.wikia.nocookie.net/disney/images/8/84/Profile_-_Beast.jpeg',),
  createData(13, 'Beaver', 'https://static.wikia.nocookie.net/disney/images/1/1a/Char_18386.jpg',),
  createData(14, 'Eeyore', 'https://static.wikia.nocookie.net/disney/images/1/1c/Profile_-_Eeyore.png'), 
]

export default function UserTable() {
  return (
    <div className='myTable' style={{ height: 900, width: '90%' }}>      
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow >
              <TableCell className='table-head'>ID</TableCell>
              <TableCell className='table-head'>Name</TableCell>
              <TableCell className='table-head'>URL Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={row.name}>
                <TableCell component="th" scope="row">
                  {row.index}
                </TableCell>
                <TableCell>{row.tutorial}</TableCell>
                <TableCell>
                  <a href={row.link} target="_blank"  rel="noreferrer" className='table-link'>
                    {row.link}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
}
