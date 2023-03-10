// Librairies
import React, { useEffect, useState } from 'react';
import axios from '../config/axios';
import { useTypewriter } from 'react-simple-typewriter';

// Composant
import Task from './Task';
import NewTask from './NewTask';
import InputFormUpdate from './InputFormUpdate';

function Tasks() {
  // States
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState('');
  const [formUpdate, setFormUpdate] = useState(false);
  const [text, count] = useTypewriter({
    words: ["Qu'allons nous faire aujourd'hui ?"],
  });

  // ComponentDidMount
  useEffect(() => {
    axios
      .get('/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='relative min-w-[300px] max-w-[500px] md:max-w-[500px] md:min-w-[500px] lg:max-w-[900px] lg:min-w-[900px] mx-auto max-h-[95vh] min-h-[80vh] overflow-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-thumb-rounded-full scrollbar-track-rounded-full shadow-2xl bg-[#151A30] rounded-xl font-semibold'>
      <h1 className='sticky top-0 z-30 p-8 text-4xl lg:text-6xl text-center text-white bg-[#151A30]'>
        <span className='mr-3'>{text}</span>
      </h1>

      <div className='pb-8 mx-auto lg:max-w-[90%]'>
        <div className='flex flex-col justify-center gap-4'>
          <NewTask
            tasks={tasks}
            setTasks={setTasks}
            formUpdate={formUpdate}
            setFormUpdate={setFormUpdate}
          />
          {!formUpdate ? (
            tasks.map((task) => (
              <Task
                formUpdate={formUpdate}
                setFormUpdate={setFormUpdate}
                tasks={tasks}
                setTasks={setTasks}
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
              setTasks={setTasks}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Tasks;
