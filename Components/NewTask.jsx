// Librairies
import React, { useEffect, useState, useRef } from 'react';
import axios from '../config/axios';

function NewTask(props) {
  const inputRef = useRef(null);
  // ComponentDidMount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
      .post('/tasks', {
        title: inputTask,
      })
      .then((response) => {
        console.log(response);
        props.setTasks([...props.tasks, response.data]);
        inputRef.current.focus();
      })

      .catch((error) => console.log(error));
    setInputTask('');
  };

  return (
    <div className='w-[70%] mx-auto py-4'>
      <form
        onSubmit={handleSubmit}
        className='flex'
      >
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
