import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'


const HOD = () => {
    const navigate = useNavigate()

    return (
      <div>
        <h1>Student Operations</h1>
        <Button variant="contained" onClick={() => navigate('addhod')}>
          Add HOD
        </Button>
        <Button variant="contained" onClick={() => navigate('updatehod')}>
          Update HOD
        </Button>
        <Button variant="contained" onClick={() => navigate('getallhod')}>
          Get All HOD
        </Button>
        <Button variant="contained" onClick={() => navigate('gethodbyid')}>
          Get HOD By Id
        </Button>
        <Button variant="contained" onClick={() => navigate('patchhod')}>
          Patch HOD id
        </Button>
      </div>
    )
}

export default HOD
