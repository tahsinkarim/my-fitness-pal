import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import user from '../../user.png';
import './Info.css';


const Info = () => {
    return (
        <div>
            <div className="user">
                <img src={user} alt="user" />
                <div className="user-info">
                    <h3 className="user-name">Karen Elizabeth</h3>
                    <p className="user-location"><span><FontAwesomeIcon icon={faLocationDot} /></span> <span className='text-small'>Oslo, Canada</span> </p>
                </div>
            </div>
            <div className="user-personal-info">
                <div>
                    <p>75<span className='text-small'>kg</span></p>
                    <p><span className='text-small'>Weight</span></p>
                </div>
                <div>
                    <p>6.3</p>
                    <p><span className='text-small'>Height</span></p>
                </div>
                <div>
                    <p>25<span className='text-small'>yrs</span></p>
                    <p><span className='text-small'>Age</span></p>
                </div>
            </div>
        </div>
    );
};

export default Info;