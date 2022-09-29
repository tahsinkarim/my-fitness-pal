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
                    <p className="user-location"><small>Oslo, Canada</small> </p>
                </div>
            </div>
            <div className="user-personal-info">
                <div>personal info here</div>
            </div>
        </div>
    );
};

export default Info;