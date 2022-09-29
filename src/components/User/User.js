import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import DataCard from '../DataCard/DataCard';
import Info from '../Info/Info';
import Toast from '../Toast/Toast';

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


    return (
        <div className='user-container'>
            <div className='sticky'>
                <Info></Info>
                <Break sendBreakTimeToStorage={sendBreakTimeToStorage}></Break>
                <h3>Exercise Details</h3>
                <DataCard name='Exercise Time' time={time}></DataCard>
                <DataCard name='Break time' time={breakTime}></DataCard>
                <Toast></Toast>
            </div>
        </div>
    );
};

export default User;