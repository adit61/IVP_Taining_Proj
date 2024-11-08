import React from 'react'
import ChildC from './ChildC'
import { useContext } from 'react'
import { emailData, nameData } from '../../App'

const ChildB = () => {
  return (
    <div>
           <h1>ChildB Component</h1>
           <ChildC/>
      
    </div>
  )
}

export default ChildB
