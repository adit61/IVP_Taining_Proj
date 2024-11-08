

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const GetAllStudent = () => {
//   const [students, setStudents] = useState([]);  
//   const [errorMsg, setErrorMsg] = useState('');   

//   useEffect(() => {
//     axios.get('https://localhost:7164/api/Student/GetAllStudents/Students')
//       .then(response => {
//         console.log(response.data);
//         setStudents(response.data); 
//       })
//       .catch(error => {
//         console.error(error);
//         setErrorMsg('Error gwtting data'); 
//       });
//   }, []); 

//   return (
//     <div>
//       <h1>Display All Students</h1>
//       <p>List of students:</p>
//       <h5>
//         {students.length > 0 ? (
//           students.map((student) => (
//             <h2 key={student.sid}>
//               {student.sid} - {student.firstname} - {student.lastname} - {student.email} - {student.streamid} - {student.grade} - {student.marks} - Admission Date: {student.admissiondate}
//             </h2>
//           ))
//         ) : (
//           <div>No students found</div>
//         )}
//         {errorMsg && <div>{errorMsg}</div>} 
//       </h5>
//     </div>
//   );
// };

// export default GetAllStudent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const GetAllStudent = () => {
  const [students, setStudents] = useState([]);  
  const [errorMsg, setErrorMsg] = useState('');   

  useEffect(() => {
    axios.get('https://localhost:7164/api/Student/GetAllStudents/Students')
      .then(response => {
        console.log(response.data);
        setStudents(response.data); 
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
                <TableCell>SID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Stream ID</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Marks</TableCell>
                <TableCell>Admission Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.sid}>
                  <TableCell>{student.sid}</TableCell>
                  <TableCell>{student.firstname}</TableCell>
                  <TableCell>{student.lastname}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.streamid}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.marks}</TableCell>
                  <TableCell>{student.admissiondate.slice(0, 10)}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div>No students found</div>
      )}
    </div>
  );
};

export default GetAllStudent;
