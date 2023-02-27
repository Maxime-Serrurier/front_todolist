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

    // // ComponentDidMount
    // useEffect(() => {
    //     axios
    //         .get('http://127.0.0.1:8000/api/tasks')
    //         .then((response) => {
    //             setTasks(response.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    // Méthodes
    const handleClickNewTask = () => {
        setNewTask(!newTask);
    };

    return (
        <div>
            <div className='bg-gradient-to-b from-orange-300 to-orange-600 p-10'>
                <h1 className='text-center text-white text-2xl'>
                    ToDoList
                </h1>
            </div>
            <div className='container mx-auto px-4 max-w-[75%] md:max-w-[50%]'>
                <div className='flex justify-center py-3 border bg-white border-red-600 my-4 rounded-full text-red-600 shadow-lg shadow-slate-300'>
                    <button
                        onClick={handleClickNewTask}
                        className='w-full h-full'
                    >
                        Ajouter une tache
                    </button>
                </div>
                <div className={newTask ? 'block' : 'hidden'}>
                    <NewTask />
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

export async function getServerSideProps() {
    // Fetch data from external API
    const data = await axios.get(`http://127.0.0.1:8000/api/tasks`);

    // Pass data to the page via props
    return { props: { data } };
}

export default Tasks;
