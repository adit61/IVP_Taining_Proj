


// import React, { useState } from 'react';
// import axios from 'axios';

// const UpdateStudent = () => {
//   const [studentId, setStudentId] = useState('');
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     streamid: '',
//     grade: '',
//     marks: '',
//     admissiondate: '',
//   });
//   const [successMsg, setSuccessMsg] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleStudentIdChange = (e) => {
//     setStudentId(e.target.value);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .put(`https://localhost:7164/api/Student/UpdateStudent/UpdateStudent/${studentId}`, formData)
//       .then(() => {
//         setSuccessMsg('Student updated successfully!');
//         setErrorMsg('');
//       })
//       .catch(() => {
//         setErrorMsg('Error updating student. Please try again later.');
//         setSuccessMsg('');
//       });
//   };

//   return (
//     <div>
//       <h1>Update Student  - EMAIL ONLY</h1>
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
//           <label>First Name: </label>
//           <input
//             type="text"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Last Name: </label>
//           <input
//             type="text"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Stream ID: </label>
//           <input
//             type="text"
//             name="streamid"
//             value={formData.streamid}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Grade: </label>
//           <input
//             type="text"
//             name="grade"
//             value={formData.grade}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Marks: </label>
//           <input
//             type="number"
//             name="marks"
//             value={formData.marks}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Admission Date: </label>
//           <input
//             type="date"
//             name="admissiondate"
//             value={formData.admissiondate}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Update Student</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateStudent;

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Alert, TextField } from '@mui/material';

const UpdateStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    streamid: '',
    grade: '',
    marks: '',
    admissiondate: '',
  });
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleStudentIdChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://localhost:7164/api/Student/UpdateStudent/UpdateStudent/${studentId}`, formData)
      .then(() => {
        setSuccessMsg('Student updated successfully!');
        setErrorMsg('');
      })
      .catch(() => {
        setErrorMsg('Error updating student. Please try again later.');
        setSuccessMsg('');
      });
  };

  return (
    <div>
      <h1>Update Student  - EMAIL ONLY</h1>

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
            label="First Name" name="firstname" value={formData.firstname} onChange={handleChange} required
          />
        </div>
        <div>
          <TextField label="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} required
          />
        </div>
        <div>
          <TextField label="Email" name="email" value={formData.email} onChange={handleChange} type="email"
            required
          />
        </div>
        <div>
          <TextField label="Stream ID"  name="streamid"  value={formData.streamid}
            onChange={handleChange} required
          />
        </div>
        <div>
          <TextField label="Grade" name="grade"value={formData.grade} onChange={handleChange}
            required
          />
        </div>
        <div>
          <TextField label="Marks" name="marks" value={formData.marks} onChange={handleChange} type="number"
            required
          />
        </div>
        <div>
          <TextField label="Admission Date" name="admissiondate" value={formData.admissiondate}
            onChange={handleChange} type="date" required fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ maxWidth: 250 }}
          />
        </div>

        <Button type="submit" variant="contained" color="primary">
          Update Student
        </Button>
      </form>
    </div>
  );
};

export default UpdateStudent;
