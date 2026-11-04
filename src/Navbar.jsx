import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navSection">
        <ul>
            <Link to="/adithya">
            <li>First Page</li>
            </Link>
            
            <Link to="/ram">
            <li>Second Page</li>
            </Link>
            
            <Link to="/saran">
            <li>Third Page</li>
            </Link>

            <Link to="/sai">
            <li>Fourth Page</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar