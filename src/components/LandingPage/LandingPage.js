import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const nav = useNavigate()

  const navigate = () => {
    nav('/login')
  }
  return (
    <div>
     <p>I am Landing Page</p>
     <button onClick={navigate}>Register</button>

    </div>
  )
}

export default LandingPage
