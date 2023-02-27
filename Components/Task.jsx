import React from 'react';

function Task(props) {
    return (
        <div className='w-full py-3 shadow-lg bg-white rounded-full'>
            {props.title}
        </div>
    );
}

export default Task;
