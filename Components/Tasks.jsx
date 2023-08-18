// Librairies
import { useEffect, useState } from 'react';
import useTaskStore from '@/store/store';

// Composant
import Task from './Task';
import NewTask from './NewTask';
import InputFormUpdate from './InputFormUpdate';

function Tasks() {
    // States
    const [id, setId] = useState('');
    const [formUpdate, setFormUpdate] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const fetchTasks = useTaskStore((state) => state.fetchTasks);
    const tasks = useTaskStore((state) => state.tasks);
    const countTask = useTaskStore((state) => state.countTask);

    // ComponentDidMount
    useEffect(() => {
        setPseudo(localStorage.getItem('auth_name'));
        fetchTasks();
    }, []);

    console.log(countTask);
    return (
        <div className='relative min-w-[300px] max-w-[500px] md:max-w-[500px] md:min-w-[500px] lg:max-w-[900px] lg:min-w-[900px] mx-auto max-h-[95vh] min-h-[80vh] overflow-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full shadow-2xl bg-[#151A30] rounded-xl font-semibold'>
            <h1 className='sticky top-0 z-30 p-8 text-4xl lg:text-5xl text-center text-white bg-[#151A30]'>
                <span className='mr-3'>
                    Bonjour {pseudo},{' '}
                    {countTask === 0
                        ? "qu'allons nous faire aujourd'hui ?"
                        : `vous avez ${countTask} ${
                              countTask === 1 ? 'tâche' : 'tâches'
                          } à accomplir`}
                </span>
            </h1>

            <div className='pb-8 mx-auto lg:max-w-[90%]'>
                <div className='flex flex-col justify-center gap-4'>
                    <NewTask
                        tasks={tasks}
                        formUpdate={formUpdate}
                        setFormUpdate={setFormUpdate}
                    />
                    {!formUpdate ? (
                        tasks.map((task) => (
                            <Task
                                formUpdate={formUpdate}
                                setFormUpdate={setFormUpdate}
                                tasks={tasks}
                                key={task.id}
                                title={task.title}
                                id={task.id}
                                taskId={id}
                                setId={setId}
                            />
                        ))
                    ) : (
                        <InputFormUpdate
                            formUpdate={formUpdate}
                            setFormUpdate={setFormUpdate}
                            taskId={id}
                            tasks={tasks}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
