import React from 'react';
import './Result.css';

const Result = (props) => {

    return (
        <div className='result'>
            <div className='header-res'>
                <div>
                    <img src="./1.png" alt=""></img>
                </div>
                <div>
                    <h3>Jawad Dhew</h3>
                    <p>Bangladesh</p>
                </div>
            </div>
            <div className='body-details'>
                <div>
                    <h2>85 <small>kg</small> </h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>5.5</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>25<small>Yrs</small></h2>
                    <p>Age</p>

                </div>

            </div>

            <div className='break-details'>
                <h3>Add a Break</h3>
                <div>
                    <div>
                        <button type="text">10</button>
                    </div>
                    <div>
                        <button type="text">10</button>
                    </div>
                    <div>
                        <button type="text">10</button>

                    </div>
                    <div>
                        <button type="text">10</button>

                    </div>
                    <div>
                        <button type="text">10</button>

                    </div>
                    <div>
                        <button type="text">10</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Result;