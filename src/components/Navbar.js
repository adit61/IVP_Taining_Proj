// import React from 'react'
// import {NavLink} from 'react-router-dom'

// const Navbar = () => {
//     const navLinkStyle = ({isActive}) => {
//         return{
//         fontweight: isActive ? "bold":"normal"
//         }
//     }
//   return (
//     <div>
//       <nav>
       

//         <NavLink style={navLinkStyle} to= "/student">Student</NavLink>
//         <NavLink style={navLinkStyle} to= "/stream">Stream</NavLink>


       

//       </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">
          My App
        </Typography>
        <div style={{ marginLeft: 'auto' }}> 
          <Button color="inherit" component={NavLink} to="/student">
            Student
          </Button>
          <Button color="inherit" component={NavLink} to="/stream">
            Stream
          </Button>
          <Button color="inherit" component={NavLink} to="/hod">
            HOD
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

