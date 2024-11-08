// import React, { useState } from 'react';
// import axios from 'axios';

// const PatchStudent = () => {
//   const [studentId, setStudentId] = useState('');
//   const [email, setEmail] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleStudentIdChange = (e) => {
//     setStudentId(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .patch(
//         `https://localhost:7164/api/Student/UpdateStudentEmail/UpdateStudentEmail/${studentId}`,
//         email ,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       )
//       .then(() => {
//         setSuccessMsg('Email updated successfully!');
//         setErrorMsg('');
//       })
//       .catch(() => {
//         setErrorMsg('Error updating email');
//         setSuccessMsg('');
//       });
//   };

//   return (
//     <div>
//       <h1>Update Student Email</h1>

//       {successMsg && <div>{successMsg}</div>}
//       {errorMsg && <div>{errorMsg}</div>}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Student ID: </label>
//           <input
//             type="text"
//             name="studentId"
//             value={studentId}
//             onChange={handleStudentIdChange}
//             required
//           />
//         </div>

//         <div>
//           <label>New Email: </label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>

//         <button type="submit">Update Email</button>
//       </form>
//     </div>
//   );
// };

// export default PatchStudent;

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Alert, TextField } from '@mui/material';

const PatchStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`https://localhost:7164/api/Student/UpdateStudentEmail/UpdateStudentEmail/${studentId}`,email,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        setSuccessMsg('Email updated successfully!');
        setErrorMsg('');
      })
      .catch(() => {
        setErrorMsg('Error updating email');
        setSuccessMsg('');
      });
  };

  return (
    <div>
      <h1>Update Student Email</h1>

      {successMsg && <Alert severity="success">{successMsg}</Alert>}
      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <form onSubmit={handleSubmit}>
        <div>
          <TextField label="Student ID" name="studentId" value={studentId} onChange={handleStudentIdChange}
            required
          />
        </div>

        <div>
          <TextField
            label="New Email"  name="email" value={email} onChange={handleEmailChange} type="email"
            required
          />
        </div>

        <Button type="submit" variant="contained" color="primary">
          Update Email
        </Button>
      </form>
    </div>
  );
};

export default PatchStudent;
