import React from 'react';
import './Activities.css';


const Activities = ({ activities, addTime }) => {
    console.log(activities)

    const { name, img, description, time, age } = activities;
    return (
        <div className='activities'>
            <div className='activities-info'>
                <img src={img} alt=""></img>
                <p className='activities-name'>
                    {name}
                </p>
                <p className='activities-details'>{description}</p>
                <p>For Age : <b>{age}</b>  </p>
                <p>Time Required : <b>{time} min</b> </p>
            </div>
            <button className='btn-cart'>
                <p onClick={() => addTime(time)} className='btn-text'>Add to List</p>
            </button>
        </div>
    );
};

export default Activities;