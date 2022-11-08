import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container text-center mt-5'>
      <h5>Welcome to my project, click staffs to see more infor</h5>
      <p><Link to={'/staffs'}>Staffs</Link></p>
    </div>
  )
}

export default Home
