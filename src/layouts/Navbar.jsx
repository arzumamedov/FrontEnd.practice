import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul>
        <Link to={'/home'}><li>Home</li></Link>
        <Link to={'/add'}><li>AddPage</li></Link>
        <Link to={'/detail'}><li>Detail</li></Link>
        <Link to={'/basket'}><li>Basket</li></Link>
    </ul>
    </>
  )
}

export default Navbar