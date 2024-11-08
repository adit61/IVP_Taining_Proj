import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
            <h1>IVP Home page</h1>
            <button onClick={() => {navigate('order')}}>Confirm Order</button>

    </div>
  )
}

export default Home
