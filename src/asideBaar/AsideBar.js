import React from 'react';
import { useState } from 'react';
import './AsideBar.css'

const AsideBar = (props) => {
    const {count} = props;
    
    let total = 0;
    for(const activity of count){
        total = total + activity.duration;
    }

    const [breaks, setBreaks] = useState("")

    const handleOfBreaks = (clickValue) => {
        setBreaks(clickValue);
        localStorage.setItem('addTime', clickValue );
    }

    return (
        <div className='asidebar'>
            <div>
                <h2>Nazrul Islam</h2>
                <p>Junior Developer</p>
                <p>Id: 62041</p>
                <p>Blod Group: A+</p>
                <p>Work At Programming Hero</p>
            </div>
            <div className='btn-area'>
                <h2>Add A Break</h2>
                <div className='all-btn-area'>
                    <button onClick={(e)=>handleOfBreaks(e.target.innerText)}>10m</button>
                    <button onClick={(e) => handleOfBreaks(e.target.innerText)}>30m</button>
                    <button onClick={(e) => handleOfBreaks(e.target.innerText)}>40m</button>
                    <button onClick={(e) => handleOfBreaks(e.target.innerText)}>60m</button>
                </div>
            </div>
            <div>
                <h2>All Activities:</h2>
                
                <h3>Active Time: {total}m</h3>
                    <br />
                    <br />
                    <h3>Break Time: {breaks}</h3>
                
            </div>
        </div>
    );
};

export default AsideBar;