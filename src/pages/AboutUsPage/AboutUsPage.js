import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { motion } from 'framer-motion';
import './AboutUsPage.css'
import ProfileCard from './../../Components/ProfileCard/ProfileCard';
const AboutUsPage = ({ variants, transition }) => {
    const team = [
        {
            name: "Lakshit Jain",
            email: "lakshitjainprof@gmail.com",
            role: "Web Developer/ML Engineer",
            github: "http://github.com/lakshitjain25",
            linkedin: "/"
        },

        {
            name: "Anjali Gupta",
            email: "anjali@gmail.com",
            role: "UI/UX Designer",
            github: "/",
            linkedin: "/"
        },
        {
            name: "Sarveshi Sharma",
            email: "sarvesh@gmail.com",
            role: "Presentation Manager",
            github: "/",
            linkedin: "/"
        },
        
    ]
    return (
        <div
            className="about-mega-container">
            <Navbar />
            <motion.div className='about-container'
                initial="out"
                animate="in"
                exit="exit"
                variants={variants}
                transition={transition}>
                <h2 className="profile-heading">Meet Our Team</h2>
                <div className="profile-cards">
                    {team.map((member, index) => {
                        return (
                            <ProfileCard data={member} key={index} index={index} />
                        )

                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default AboutUsPage