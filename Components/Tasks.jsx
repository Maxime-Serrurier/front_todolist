// Librairies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Composant
import Task from './Task';
import NewTask from './NewTask';

function Tasks({ data }) {
    console.log(data);
    // States
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(false);
    
    // ComponentDidMount
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/tasks')
            .then((response) => {
                console.log(response.data);
                setTasks(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    // Méthodes
    const handleClickNewTask = () => {
        setNewTask(!newTask);
    };

    return (
        <div>
            <div className='p-10 bg-gradient-to-b from-orange-300 to-orange-600'>
                <h1 className='text-2xl text-center text-white'>
                    ToDoList
                </h1>
            </div>
            <div className='container mx-auto px-4 max-w-[75%] md:max-w-[50%]'>
                <div className='flex justify-center py-3 my-4 text-red-600 bg-white border border-red-600 rounded-full shadow-lg shadow-slate-300'>
                    <button
                        onClick={handleClickNewTask}
                        className='w-full h-full'
                    >
                        Ajouter une tache
                    </button>
                </div>
                <div className={newTask ? 'block' : 'hidden'}>
                    <NewTask tasks={tasks} setTasks={setTasks}/>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    {tasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            id={task.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
