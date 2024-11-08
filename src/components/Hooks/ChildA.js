import React from 'react'
import ChildB from './ChildB'
import { useContext } from 'react'
import { emailData, nameData } from '../../App'

const ChildA = () => {
    const name= useContext(nameData)
    const email= useContext(emailData)

  return (
    <div>
         <h1>ChildA Component</h1>
         <h1> child a data {name} - {email}</h1>
         <ChildB />
    </div>
  )
}

export default ChildA
