import React, { useState } from 'react';
import './Result.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Result = ({ time }) => {
    const [count, setcount] = useState(0)
    const changeBreak = (t) => {
        setcount(t)
    }
    const notify = () => toast("Congratulations!You have finished your daily milestone!");

    return (
        <div className='result'>
            <div className='header-res'>
                <div>
                    <img src="./1.png" alt=""></img>
                </div>
                <div>
                    <h3>Jawad Dhew</h3>
                    <p><FontAwesomeIcon icon={faLocationDot} /> Bangladesh</p>
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
                <div className='break'>
                    <div>
                        <button onClick={() => { changeBreak(10) }} className='btn' type="text"> 10s </button>
                    </div>
                    <div>
                        <button onClick={() => { changeBreak(20) }} className='btn' type="text">20s</button>
                    </div>
                    <div>
                        <button onClick={() => { changeBreak(30) }} className='btn' type="text">30s</button>

                    </div>
                    <div>
                        <button onClick={() => { changeBreak(40) }} className='btn' type="text">40s</button>

                    </div>
                    <div>
                        <button onClick={() => { changeBreak(50) }} className='btn' type="text">50s</button>

                    </div>

                </div>

            </div>
            <div className='excercise-details'>
                <h2>Excercise Details</h2>
                <div className='ex'>
                    <div className='ex-info'>
                        <h3>Excercise Time </h3>
                        <p className='Ex-time'>{time}min</p>
                    </div>
                    <div className='ex-info'>
                        <h3>Break Time </h3>
                        <p>{count}s</p>
                    </div>
                </div>

            </div>

            <button onClick={notify} className='btn-complete' type="text">Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Result;