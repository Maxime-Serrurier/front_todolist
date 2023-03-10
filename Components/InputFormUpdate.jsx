import axios from 'config/axios';
import React, { useEffect, useState, useRef } from 'react';

function InputFormUpdate(props) {
  // State
  const [taskValue, setTaskValue] = useState('');

  // useRef
  const inputRef = useRef(null);

  // ComponentDidMount
  useEffect(() => {
    inputRef.current.focus();
    axios(`/tasks/${props.id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  // Méthodes
  const handleChange = (e) => {
    let taskValue = e.target.value;
    setTaskValue(taskValue);
  };
  return (
    <div className='w-[70%] mx-auto py-4'>
      <form
        // onSubmit={handleSubmit}
        className='flex'
      >
        <input
          ref={inputRef}
          className='w-full p-4 bg-transparent ring-2 ring-[#510094] ring-inset outline-2 focus:outline-none rounded-l-lg shadow-lg  text-[#FFF] '
          value={props.id}
          onChange={handleChange}
          type='text'
          name='title'
          placeholder='Ajouter une tâche'
        />
        <button className='py-4 bg-gradient-to-l from-[#612be9] to-[#510094] rounded-r-lg px-4 text-[#FFF]'>
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default InputFormUpdate;
