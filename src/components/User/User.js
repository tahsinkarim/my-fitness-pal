import React from 'react';
import Datacard from '../Datacard/Datacard';
import Info from '../Info/Info';

import './User.css';

const User = ({time}) => {
    return (
        <div className='user-container'>
            <Info></Info>
            <Datacard name='Exercise Time' time={time}></Datacard>
            <Datacard name='Break time'></Datacard>
        </div>
    );
};

export default User;