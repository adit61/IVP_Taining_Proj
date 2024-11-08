// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Student = () => {
//     const navigate= useNavigate()
//   return (
//     <div>

//     <div>
//             <h1>Student Operations</h1>
//             <button onClick={() => {navigate('addstudent')}}>Add Student</button>
//             <button onClick={() => {navigate('updatestudent')}}>Update Student</button>
//             <button onClick={() => {navigate('getallstudent')}}>Get All Student</button>
//             <button onClick={() => {navigate('getstudentbyid')}}>Get Student By Id</button>
//             <button onClick={() => {navigate('patchstudent')}}>Patch Email id</button>




//             {/* <button onClick={() => {navigate('order')}}>Update Student</button>
//             <button onClick={() => {navigate('order')}}>Delete Student</button>
//             <button onClick={() => {navigate('order')}}>GetAll Student</button> */}



//     </div>
  
      
//     </div>
//   )
// }

// export default Student

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Student = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Student Operations</h1>
      <Button variant="contained" onClick={() => navigate('addstudent')}>
        Add Student
      </Button>
      <Button variant="contained" onClick={() => navigate('updatestudent')}>
        Update Student
      </Button>
      <Button variant="contained" onClick={() => navigate('getallstudent')}>
        Get All Student
      </Button>
      <Button variant="contained" onClick={() => navigate('getstudentbyid')}>
        Get Student By Id
      </Button>
      <Button variant="contained" onClick={() => navigate('patchstudent')}>
        Patch Email id
      </Button>
    </div>
  )
}

export default Student
