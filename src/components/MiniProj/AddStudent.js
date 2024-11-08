

// import React, { useState } from 'react';
// import axios from 'axios';

// const AddStudent = () => {
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,[name]: value, 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); 

  
//     axios
//       .post('https://localhost:7164/api/Student/AddStudent/AddStudents', formData)  
//       .then((response) => {
//         setSuccessMsg('Student added successfully!');
//         setErrorMsg('');
//         setFormData({
//           firstname: '',
//           lastname: '',
//           email: '',
//           streamid: '',
//           grade: '',
//           marks: '',
//           admissiondate: '',
//         });
//       })
//       .catch((error) => {
//         setErrorMsg('Error adding student.');
//         setSuccessMsg('');
//       });
//   };

//   return (
//     <div>
//       <h1>Add New Student</h1>
      
//       {successMsg && <div >{successMsg}</div>}
//       {errorMsg && <div >{errorMsg}</div>}

//       <form onSubmit={handleSubmit}>
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

//         <button type="submit">Add Student</button>
//       </form>
//     </div>
//   );
// };

// export default AddStudent;


import React, { useState } from 'react';
import axios from 'axios';
import { Button, Alert, TextField } from '@mui/material';

const AddStudent = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,  
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://localhost:7164/api/Student/AddStudent/AddStudents', formData)
      .then((response) => {
        setSuccessMsg('Student added successfully!');
        setErrorMsg('');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          streamid: '',
          grade: '',
          marks: '',
          admissiondate: '',
        });
      })
      .catch(() => {
        setErrorMsg('Error adding student.');
        setSuccessMsg('');
      });
  };

  return (
    <div>
      <h1>Add New Student</h1>

      {successMsg && <Alert severity="success">{successMsg}</Alert>}
      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="First Name" name="firstname" value={formData.firstname} onChange={handleChange}
          />
        </div>
        <div>
          <TextField label="Last Name" name="lastname"value={formData.lastname} onChange={handleChange}
          />
        </div>
        <div>
          <TextField label="Email" name="email" value={formData.email} onChange={handleChange} type="email"
          />
        </div>
        <div>
          <TextField label="Stream ID"  name="streamid" value={formData.streamid} onChange={handleChange}
          />
        </div>
        <div>
          <TextField label="Grade" name="grade" value={formData.grade} onChange={handleChange}
          />
        </div>
        <div>
          <TextField  label="Marks" name="marks" value={formData.marks} onChange={handleChange} type="number"
          />
        </div>
        <div>
          <TextField label="Admission Date" name="admissiondate" value={formData.admissiondate} onChange={handleChange} type="date"
          />
        </div>

        <Button type="submit" variant="contained" color="primary">
          Add Student
        </Button>
      </form>
    </div>
  );
};

export default AddStudent;


