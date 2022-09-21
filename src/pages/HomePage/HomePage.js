import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import './HomePage.css'
import Navbar from './../../Components/Navbar/Navbar';
const HomePage = ({ variants, transition }) => {
    return (
        <div
            className="homepage-mega-container">
            <Navbar />
            <motion.div className='homepage-container'
                initial="out"
                animate="in"
                exit="exit"
                variants={variants}
                transition={transition}>
                <div className="left-side">
                    <h1 className="homepage-heading">Proper greening & smart solutions</h1>
                    <p className='homepage-tagline'>Moving towards a better future by bringing in the change bla bla bla</p>
                    <div className="buttons-container">
                        <Link to="predict"><button className="disease">Predict Disease</button></Link>
                        <Link><button className="marker">Market</button></Link>
                    </div>
                </div>
                <div className="right-side">
                    <img src="./images/leaves_ball.png" alt="" />
                </div>
            </motion.div>
        </div>
    )
}

export default HomePage