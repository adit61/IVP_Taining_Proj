import React from 'react'

const Employee = ({emp}) => {
  return (
    <div>
      <h2>{emp.name} works on {emp.skill}</h2>
    </div>
  )
}

export default Employee
