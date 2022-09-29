import React from 'react';

const Break = (props) => {
    const {sendBreakTimeToStorage} = props;
    return (
        <div>
            <p>Add a break</p>
            <div>
                <button onClick={() =>sendBreakTimeToStorage(10)}>Button</button>
                <button onClick={() =>sendBreakTimeToStorage(20)}>Button</button>
                <button onClick={() =>sendBreakTimeToStorage(30)}>Button</button>
                <button onClick={() =>sendBreakTimeToStorage(40)}>Button</button>
                <button onClick={() =>sendBreakTimeToStorage(50)}>Button</button>
            </div>
        </div>
    );
};

export default Break;