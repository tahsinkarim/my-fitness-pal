import React from 'react';
import './Datacard.css';

const Datacard = ({name, time}) => {
    return (
            <div className='data-container'>
                <p className='data-title'>{name}</p>
                <p className='data'>{time} seconds</p>
            </div>
    );
};

export default Datacard;