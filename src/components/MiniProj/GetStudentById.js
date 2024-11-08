// import React, { useState } from 'react';
// import axios from 'axios';

// const GetStudentById = () => {
//   const [studentId, setStudentId] = useState('');
//   const [studentData, setStudentData] = useState(null);
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleStudentIdChange = (e) => {
//     setStudentId(e.target.value);
//   };

//   const handleFetchStudent = () => {
//     setErrorMsg(''); 

//     axios
//       .get(`https://localhost:7164/api/Student/GetStudentById/Students/${studentId}`)
//       .then((response) => {
//         setStudentData(response.data);
//       })
//       .catch(() => {
//         setErrorMsg('Error fetching student details');
//         setStudentData(null);
//       });
//   };

//   return (
//     <div>
//       <h1>Get Student By Id</h1>

//       {errorMsg && <div>{errorMsg}</div>}

//       <div>
//         <label>Student ID: </label>
//         <input
//           type="text"
//           name="studentId"
//           value={studentId}
//           onChange={handleStudentIdChange}
//           required
//         />
//       </div>

//       <button onClick={handleFetchStudent}>Fetch Student</button>

//       {studentData && (
//         <div>
//           <h2>Student Details:</h2>
//           <p>First Name: {studentData.firstname}</p>
//           <p>Last Name: {studentData.lastname}</p>
//           <p>Email: {studentData.email}</p>
//           <p>Stream ID: {studentData.streamid}</p>
//           <p>Grade: {studentData.grade}</p>
//           <p>Marks: {studentData.marks}</p>
//           <p>Admission Date: {studentData.admissiondate}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetStudentById;

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Alert } from '@mui/material';

const GetStudentById = () => {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleFetchStudent = () => {
    setErrorMsg('');

    axios
      .get(`https://localhost:7164/api/Student/GetStudentById/Students/${studentId}`)
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        setErrorMsg('Error fetching student details');
        setStudentData(null);
      });
  };

  return (
    <div>
      <h1>Get Student By Id</h1>

      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <div>
        <label>Student ID: </label>
        <input
          type="text" name="studentId" value={studentId} onChange={handleStudentIdChange} required
        />
      </div>

      <Button className="button" onClick={handleFetchStudent}>Fetch Student</Button>

      {studentData && (
        <div>
          <h2>Student Details:</h2>
          <p>First Name: {studentData.firstname}</p>
          <p>Last Name: {studentData.lastname}</p>
          <p>Email: {studentData.email}</p>
          <p>Stream ID: {studentData.streamid}</p>
          <p>Grade: {studentData.grade}</p>
          <p>Marks: {studentData.marks}</p>
          <p>{studentData.admissiondate.slice(0, 10)}</p>
          </div>
      )}
    </div>
  );
};

export default GetStudentById;


