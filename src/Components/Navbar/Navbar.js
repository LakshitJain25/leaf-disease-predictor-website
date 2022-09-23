import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navRef = useRef()
    const burgerRef = useRef()
    const navbarRef = useRef()
    // useEffect(() => {
    //     window.addEventListener('scroll', (e) => {


    //         if (window.scrollY >= 1 && window.scrollY < 88) {
    //             navRef.current.classList.add("scrolling")
    //             navRef.current.style.background = "rgba(0,0,0,0.54)"
    //         }
    //         else if (window.scrollY > 88) {
    //             navRef.current.style.background = "rgba(0,0,0,0.87)"
    //         }
    //         else {
    //             navRef.current.classList.remove('scrolling')
    //             navRef.current.style.background = "transparent"
    //         }
    //     })
    // }, [])
    return (
        <div className='navbar-container'>
            <div className="logo-container">
                <Link to="/" style={{ textDecoration: "none" }} ><h3 className='logo-heading' >FAR<span>MEY</span></h3></Link>
            </div>
            <nav className="navigation-container">
                <ul className="navbar">
                    <Link to="/"
                        style={{ textDecoration: "none", color: " rgb(26, 26, 26)" }} ><li className='navbar-item'>Home</li></Link>
                    <Link to="/predict"
                        style={{ textDecoration: "none", color: " rgb(26, 26, 26)" }} ><li className='navbar-item'>Prediction</li></Link>
                    <Link to="/market"
                        style={{ textDecoration: "none", color: " rgb(26, 26, 26)" }} ><li className='navbar-item'>Market</li></Link>
                    <Link to="/"
                        style={{ textDecoration: "none", color: " rgb(26, 26, 26)" }} ><li className='navbar-item'>Cargo</li></Link>
                    <Link to="/"
                        style={{ textDecoration: "none", color: " rgb(26, 26, 26)" }} ><li className='navbar-item'>About Us</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar