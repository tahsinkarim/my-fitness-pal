import React, { useEffect, useState } from 'react';
import Datacard from '../Datacard/Datacard';
import Info from '../Info/Info';

import './User.css';

const User = ({time}) => {
    const [breakTime, setBreakTime] = useState(0)

    if(!localStorage.getItem('time')){
        localStorage.setItem('time', 0)
    }

    const sendBreakTimeToStorage = (id) =>{
        localStorage.setItem('time',id)
        setBreakTime(localStorage.getItem('time'))
    }

    useEffect( () =>{
        const newTime = localStorage.getItem('time')
        setBreakTime(newTime)
    },[breakTime])

    const [toast, setToast] = useState(0)

    const toggleToast = () =>{
        if (!toast){
            setToast(1)
        }else {
            setToast(0)
        }
    }

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
                <button className='toggle-btn' onClick={toggleToast}>Activity Completed</button>
                <div className={toast ? 'toast' : 'toast-hidden'}>
                    <p onClick={toggleToast}>Congratulation!! You've completed your tasks for today.</p>
                </div>
            </div>
        </div>
    );
};

export default User;