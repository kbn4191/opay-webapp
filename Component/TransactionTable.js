import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';

function createData(name, Status, account, dt, amount) {
  return { name, Status, account, dt, amount };
}

const rows = [
  createData('Jason Asanya', 'Sucessful', 4563267891378, '21-01-2023', '₦ 250,000.000'),
  createData('Uchenna Okeke', 'Sucessful',4563267891378, '21-01-2023', '₦ 250,000.000'),
  createData('Oluchi Loveth', 'Sucessful', 4563267891378, '21-01-2023', '₦ 250,000.000'),
  createData('Joy Okeke', 'Sucessful',4563267891378, '21-01-2023', '₦ 250,000.000'),
  createData('Comfort Kalu', 'Sucessful',4563267891378, '21-01-2023', '₦ 250,000.000'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} elevation={false}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor:"#F8F9FB",  }}>
          <TableRow >
            <TableCell sx={{fontSize:"18px", Color:"#606E7E", fontWeight:"600", lineHeight:"150%"}}>Name</TableCell>
            <TableCell sx={{fontSize:"18px", Color:"#606E7E", fontWeight:"600", lineHeight:"150%"}}  align="left">Status</TableCell>
            <TableCell sx={{fontSize:"18px", Color:"#606E7E", fontWeight:"600", lineHeight:"150%"}} align="left">Account No.</TableCell>
            <TableCell sx={{fontSize:"18px", Color:"#606E7E", fontWeight:"600", lineHeight:"150%"}} align="left">Date</TableCell>
            <TableCell sx={{fontSize:"18px", Color:"#606E7E", fontWeight:"600", lineHeight:"150%"}} align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{
                color:"#606E7E", fontSize:"15px", 
                fontWeight:"600"
              }}>
                {row.name}
              </TableCell>
              <TableCell align="left"><Button sx={{width:"112px", height:"44px", backgroundColor:"#EBF6F3", color:"#0CB486", fontSize:"15px", 
              fontWeight:"600", paddingX:"18px", marginY:"0px"}} >{row.Status}</Button></TableCell>
              <TableCell align="left"
               sx={{
                color:"#606E7E", fontSize:"15px", 
                fontWeight:"600"
              }}
              >{row.account}</TableCell>
              <TableCell align="left"
               sx={{
                color:"#606E7E", fontSize:"15px", 
                fontWeight:"600"
              }}
              >{row.dt}</TableCell>
              <TableCell align="left"
               sx={{
                color:"#606E7E", fontSize:"15px", 
                fontWeight:"600"
              }}
              >{row.amount}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}