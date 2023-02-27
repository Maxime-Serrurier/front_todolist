// Librairies
import React, { useState } from 'react';
import axios from 'axios';

function NewTask() {
    //State
    const [inputTask, setInputTask] = useState('');

    // Méthodes
    const handleChange = (e) => {
        let inputTask = e.target.value;
        setInputTask(inputTask);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://127.0.0.1:8000/api/tasks', {
                title: inputTask,
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
        setInputTask('');
    };

    return (
        <div className='w-full py-4 flex justify-center'>
            <form
                action='/'
                onSubmit={handleSubmit}
                className='w-full'
            >
                <input
                    className='w-full py-3 shadow-lg bg-white rounded-full text-center'
                    value={inputTask}
                    onChange={handleChange}
                    type='text'
                    name='title'
                />
            </form>
        </div>
    );
}

export default NewTask;
