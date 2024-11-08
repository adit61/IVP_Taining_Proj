import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectHook3 = () => {
  const [users, setUsers] = useState([]);
  const [emp, setEmp] = useState({});
  const [id, setId] = useState('');  

  const clickHandler = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
          console.log(res);
          setEmp(res.data); 
        })
        .catch(err => {
          console.log(err);
        });
  }

//   useEffect(() => {
//     if (id) {
//       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then(res => {
//           console.log(res);
//           setEmp(res.data); 
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   }, [id]);  // Dependency array for id


  return (
    <div>
      <input 
        type="text" 
        value={id} 
        onChange={(e) => setId(e.target.value)} // Handle input change 
      />
      <button onClick={clickHandler}>Fetch Details</button>

      {/* Conditionally render emp details if emp is not empty */}
   
        <h2>{emp.id} - {emp.name}</h2>
      
    </div>
  );
}

export default UseEffectHook3;
