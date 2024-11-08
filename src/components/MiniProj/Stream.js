import React from 'react'
import { useNavigate } from 'react-router-dom'

const Stream = () => {
    const navigate= useNavigate()

  return (
    <div>
      <h1>Stream Operations</h1>
            <button onClick={() => {navigate('addstream')}}>Add Stream</button>
            <button onClick={() => {navigate('updatestream')}}>Update Stream</button>
            <button onClick={() => {navigate('getstreambyid')}}>Get Stream By Id</button>
            <button onClick={() => {navigate('getallstreams')}}>Get All Streams</button>

    </div>
  )
}

export default Stream
