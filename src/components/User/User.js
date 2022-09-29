import React, { useEffect, useState } from 'react';
import Datacard from '../Datacard/Datacard';
import Info from '../Info/Info';

import './User.css';

const User = ({time}) => {
    const [breakTime, setBreakTime] = useState(0)

    const sendBreakTimeToStorage = (id) =>{
        localStorage.setItem('time',id)
        setBreakTime(localStorage.getItem('time'))
    }

    useEffect( () =>{
        const newTime = localStorage.getItem('time')
        setBreakTime(parseInt(newTime))
    },[breakTime])

    return (
        <div className='user-container'>
            <div className='sticky'>
                <Info></Info>
                <div>
                    <h3>Add a Break</h3>
                    <div className='button-container'>
                        <button onClick={() =>sendBreakTimeToStorage(10)}>10s</button>
                        <button onClick={() =>sendBreakTimeToStorage(20)}>20s</button>
                        <button onClick={() =>sendBreakTimeToStorage(30)}>30s</button>
                        <button onClick={() =>sendBreakTimeToStorage(40)}>40s</button>
                        <button onClick={() =>sendBreakTimeToStorage(50)}>50s</button>
                    </div>
                </div>
                <h3>Exercise Details</h3>
                <Datacard name='Exercise Time' time={time}></Datacard>
                <Datacard name='Break time' time={breakTime}></Datacard>
            </div>
            
        </div>
    );
};

export default User;