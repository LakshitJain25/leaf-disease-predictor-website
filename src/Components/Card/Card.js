import React from 'react'
import './Card.css'
const Card = () => {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src="https://m.media-amazon.com/images/I/71UG+WuJQaL._SX466_.jpg" alt="" />
            </div>
            <div className="details-container">
                <div className="sub-detail">
                    <h3 className="sub-heading">Product Name:</h3>
                    <span className='sub-content'>manure</span>
                </div>
                <div className="sub-detail">
                    <h3 className="sub-heading">Available Till:</h3>
                    <span className='sub-content'>2nd October 2022</span>
                </div>
                <div className="sub-detail">
                    <h3 className="sub-heading">Location:</h3>
                    <span className='sub-content'>New Delhi</span>
                </div>
                <button className='details-btn'>View Details</button>
            </div>
        </div>
    )
}

export default Card