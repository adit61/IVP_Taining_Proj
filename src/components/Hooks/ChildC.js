import React from 'react'
import { useContext } from 'react'
import { emailData, nameData } from '../../App'


const ChildC = () => {
    const name= useContext(nameData)
    const email= useContext(emailData)

  return (
    <div>
      <h1>Child C Component</h1>
    <h1>{name}</h1>
    <h1>{email}</h1>

    </div>
  )
}

export default ChildC
