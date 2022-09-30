import React from 'react';
import './Work.css'

const Work = ({ activity, handleClikerCount }) => {
    const { duration, text, name, img, time } = activity;
    return (
        <div className='activity'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <h2>{name}</h2>
                <p>{text}</p>
                <p>{time}</p>
                <p>{duration}</p>
            </div>
            <button onClick={() =>handleClikerCount(activity)} className='btn-task'>
                <p>Add To Task</p>
            </button>
        </div>
    );
};

export default Work; 