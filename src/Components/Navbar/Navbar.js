import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="logo-container">
                <Link to="/" style={{ textDecoration: "none" }} ><h3 className='logo-heading' >FAR<span>MEY</span></h3></Link>
            </div>
            <nav className="navigation-container">
                <ul className="navbar">
                    <Link style={{ textDecoration: "none",color:" rgb(26, 26, 26)" }} ><li className='navbar-item'>Home</li></Link>
                    <Link style={{ textDecoration: "none",color:" rgb(26, 26, 26)" }} ><li className='navbar-item'>Prediction</li></Link>
                    <Link style={{ textDecoration: "none",color:" rgb(26, 26, 26)" }} ><li className='navbar-item'>Market</li></Link>
                    <Link style={{ textDecoration: "none",color:" rgb(26, 26, 26)" }} ><li className='navbar-item'>Cargo</li></Link>
                    <Link style={{ textDecoration: "none",color:" rgb(26, 26, 26)" }} ><li className='navbar-item'>About Us</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar