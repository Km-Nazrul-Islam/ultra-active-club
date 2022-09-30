import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AsideBar from '../../asideBaar/AsideBar';
import Work from '../Work/Work';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([])

    const [count, setCount] = useState([])


    useEffect(()=>{
        fetch('fakeDataApi.json')
        .then(res => res.json())
            .then(data => setActivities(data))
    },[])

    const handleClikerCount = (activity) => {
        //console.log(activity)
        const newCount = [...count, activity];
        setCount(newCount);
    }

    return (
        <div className='activity-container'>
            <div className='work-container'>
                {
                    activities.map(activity=> <Work 
                        key={activity.id}
                        activity={activity}
                        handleClikerCount={handleClikerCount}
                        ></Work>)
                }
            </div>

            <div className='sidebar-container'>
                <AsideBar count={count}></AsideBar>
            </div>
        </div>
    );
};

export default Activities; 