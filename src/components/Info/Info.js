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
                    <p className="user-location"><span><FontAwesomeIcon icon={faLocationDot} /></span> <small>Oslo, Canada</small> </p>
                </div>
            </div>
            <div className="user-personal-info">
                <div>
                    <p>75<small>kg</small></p>
                    <p><small>Weight</small></p>
                </div>
                <div>
                    <p>6.3</p>
                    <p><small>Height</small></p>
                </div>
                <div>
                    <p>25<small>yrs</small></p>
                    <p><small>Age</small></p>
                </div>
            </div>
        </div>
    );
};

export default Info;