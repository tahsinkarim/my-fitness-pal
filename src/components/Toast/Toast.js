import React, { useState } from 'react';
import './Toast.css';

const Toast = () => {
    const [toast, setToast] = useState(0)

    const toggleToast = () =>{
        if (!toast){
            setToast(1)
        }else {
            setToast(0)
        }
    }

    return (
        <div>
            <button className='toggle-btn' onClick={toggleToast}>Activity Completed</button>
            <div className={toast ? 'toast' : 'toast-hidden'}>
                <p onClick={toggleToast}>Congratulation!! You've completed your tasks for today.</p>
            </div>
        </div>
    );
};

export default Toast;