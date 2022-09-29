import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Result from '../Result/Result';

const Main = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div className='main-container'>
            <div className="activities-container">
                {
                    activities.map(a => <Activities
                        key={a.id}
                        activities={a}
                    ></Activities>)
                }
            </div>
            <div className="result-container">
                <Result></Result>
            </div>
        </div>
    );
};

export default Main;