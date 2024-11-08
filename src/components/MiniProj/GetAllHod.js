import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const GetAllHods = () => {
  const [hods, setHods] = useState([]);  
  const [errorMsg, setErrorMsg] = useState('');   

  useEffect(() => {
    axios.get('https://localhost:7164/api/HOD/GetAllHODs/HODs')
      .then(response => {
        console.log(response.data);
        setHods(response.data); 
      })
      .catch(error => {
        console.error(error);
        setErrorMsg('Error getting data'); 
      });
  }, []); 

  return (
    <div>
      <h1>Display All Students</h1>
      {errorMsg && <div>{errorMsg}</div>} 

      {students.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>HOD ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Stream ID</TableCell>
                <TableCell>Hire Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hods.map((hod) => (
                <TableRow key={hod.hodid}>
                  <TableCell>{hod.hodid}</TableCell>
                  <TableCell>{hod.firstname}</TableCell>
                  <TableCell>{hod.lastname}</TableCell>
                  <TableCell>{hod.email}</TableCell>
                  <TableCell>{hod.streamid}</TableCell>
                  <TableCell>{hod.hiredate.slice(0,10)}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>No HOD found</div>
      )}
    </div>
  );
};

export default GetAllHods;