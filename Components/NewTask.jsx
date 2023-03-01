// Librairies
import React, { useState } from 'react';
import axios from 'axios';

function NewTask(props) {
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
            .then((response) => {console.log(response)
            props.setTasks([...props.tasks, response.data])})

            .catch((error) => console.log(error));
        setInputTask('');
    };

    return (
        <div className='flex justify-center w-full py-4'>
            <form
                onSubmit={handleSubmit}
                className='w-full'
            >
                <input
                    className='w-full py-3 text-center bg-white rounded-full shadow-lg'
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
