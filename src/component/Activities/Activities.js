import React from 'react';
import './Activities.css';


const Activities = ({ activities }) => {
    console.log(activities)

    const { name, img, description, time } = activities;
    return (
        <div className='activites'>
            <div className='activities-info'>
                <img src={img} alt=""></img>
                <p className='activities-name'>
                    {name}
                </p>
                <p>Price</p>
                <p><small>Seller: </small></p>
                <p><small>Ratings: </small></p>
            </div>
            <button className='btn-cart'>
                <p className='btn-text'>Add To List</p>

            </button>
        </div>
    );
};

export default Activities;