// Librairies
import useTaskStore from '@/store/store';
import { useEffect, useState, useRef } from 'react';

function NewTask(props) {
    const inputRef = useRef(null);
    // ComponentDidMount
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    //State
    const [inputTask, setInputTask] = useState('');
    const createTask = useTaskStore((state) => state.createTask);

    // Méthodes
    const handleChange = (e) => {
        let inputTask = e.target.value;
        setInputTask(inputTask);
    };

    const handleCreateTask = (event) => {
        event.preventDefault();
        const inputTask = inputRef.current.value.trim();
        if (inputTask) {
            createTask(inputTask);
            props.setFormUpdate(false);

            inputRef.current.focus();
        }
        setInputTask('');
    };

    return (
        <div className='w-[80%] lg:w-[70%] mx-auto py-4'>
            <form onSubmit={handleCreateTask} className='flex'>
                <input
                    ref={inputRef}
                    className='w-full p-4 bg-transparent ring-2 ring-[#FE4A14] ring-inset outline-2 focus:outline-none rounded-l-lg shadow-lg  text-[#FFF] '
                    value={inputTask}
                    onChange={handleChange}
                    type='text'
                    name='title'
                    placeholder='Ajouter une tâche'
                />
                <button className='py-4 bg-gradient-to-l from-[#f4742f] to-[#FE4A14] rounded-r-lg px-4 text-[#FFF]'>
                    Ajouter
                </button>
            </form>
        </div>
    );
}

export default NewTask;
