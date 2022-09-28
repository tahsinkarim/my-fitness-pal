import React from 'react';
import './Card.css';

const Card = (props) => {
    const {addToList} = props;
    const {name, img, time, details} = props.card;
    return (
        <div className='card'>
            <img src={img} alt={name} />
            <div className="card-info">
                <h3>{name}</h3>
                <p className='card-details'>{details}</p>
                <p>Time required: <strong>{time}s</strong></p>
            </div>
            <div className='btn'>
                <button onClick={addToList}>Add to list</button>
            </div>
            
            
        </div>
    );
};

export default Card;