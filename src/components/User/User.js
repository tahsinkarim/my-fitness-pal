import React from 'react';
import user from '../../user.png';
import './User.css';

const User = () => {
    return (
        <div>
            <div className="user">
                <img src={user} alt="user" />
                <div className="user-info">
                    <h3 className="user-name">Johnny Bravo</h3>
                    <p className="user-location"><small>Oslo, Canada</small> </p>
                </div>
            </div>
        </div>
    );
};

export default User;