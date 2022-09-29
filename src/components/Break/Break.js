import React from 'react';

const Break = ({sendBreakTimeToStorage}) => {
    const breaks = [10, 20, 30, 40, 50]
    return (
        <div>
            <h3>Add a Break</h3>
            <div className='button-container'>
                {
                    breaks.map( breakTime => <button key={breakTime} onClick={() =>sendBreakTimeToStorage(breakTime)}>{breakTime}s</button>)
                }
            </div>
        </div>
    );
};

export default Break;