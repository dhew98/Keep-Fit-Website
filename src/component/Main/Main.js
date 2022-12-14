import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Result from '../Result/Result';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [time, settime] = useState(0)
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    const addTime = (t) => {

        settime(time + parseInt(t))

    }


    return (



        <div className='main-container'>
            <div className='acitvity'>
                <div className='header'>
                    <h1 className='Name'> <FontAwesomeIcon className="icon" icon={faDumbbell} />  Keep Fit</h1>
                    <h2>Select Your Activities!</h2>
                </div>
                <div className="activities-container">
                    {
                        activities.map(a => <Activities
                            key={a.id}
                            activities={a}
                            addTime={addTime}
                        ></Activities>)
                    }
                </div>
            </div>

            <div className="result-container">
                <Result time={time}></Result>
            </div>
        </div>


    );
};

export default Main;