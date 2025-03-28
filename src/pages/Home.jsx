import React from 'react'
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <>
        <div className='bg-dark'>
            <h1>HEJ</h1>
            <div><NavLink to="/" className="link">Link</NavLink></div>
            <div><NavLink to="/" className="link active-link">Active link</NavLink></div>
        </div>
    </>
  )
}

export default Home