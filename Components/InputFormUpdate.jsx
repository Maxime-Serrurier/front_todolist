// Librairies
import useTaskStore from '@/store/taskStore';
import axios from 'config/axios';
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

function InputFormUpdate({ taskId, formUpdate, setFormUpdate }) {
    // State
    const [taskValue, setTaskValue] = useState('');
    const [updateTask, status] = useTaskStore((state) => [
        state.updateTask,
        state.taskStatus[taskId],
    ]);

    // useRef
    const inputRef = useRef(null);

    // ComponentDidMount
    useEffect(() => {
        inputRef.current.focus();
        axios
            .get(`/tasks/${taskId}`)
            .then((response) => {
                setTaskValue(response.data.title);
            })
            .catch((err) => console.log(err));
    }, []);

    // Méthodes
    const handleChange = (e) => {
        let taskValue = e.target.value;
        setTaskValue(taskValue);
    };

    const handleUpdateTask = (e) => {
        e.preventDefault();
        updateTask(taskId, taskValue, status);
        setFormUpdate(!formUpdate);
    };

    // JSX
    return (
        <div className='w-[70%] mx-auto py-4'>
            <form onSubmit={handleUpdateTask} className='flex'>
                <input
                    ref={inputRef}
                    className='w-full p-4 bg-transparent ring-2 ring-[#510094] ring-inset outline-2 focus:outline-none rounded-l-lg shadow-lg  text-[#FFF] '
                    value={taskValue}
                    onChange={handleChange}
                    type='text'
                    name='title'
                    placeholder='Ajouter une tâche'
                />
                <button className='py-4 bg-gradient-to-l from-[#612be9] to-[#510094] rounded-r-lg px-4 text-[#FFF]'>
                    Modifier
                </button>
            </form>
        </div>
    );
}

export default InputFormUpdate;

InputFormUpdate.propTypes = {
    taskId: PropTypes.number.isRequired,
    formUpdate: PropTypes.bool.isRequired,
    setFormUpdate: PropTypes.func.isRequired,
};
