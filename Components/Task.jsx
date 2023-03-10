// Librairies
import React, { useState } from 'react';
import axios from '../config/axios';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

function Task(props) {
  // State
  const [checkTask, setCheckTask] = useState(false);

  // Méthodes
  const handleClickCheck = () => {
    setCheckTask(!checkTask);
  };

  const handleClickDelete = () => {
    axios
      .delete(`/tasks/${props.id}`)
      .then(() =>
        props.setTasks(
          props.tasks.filter((task) => task.id !== props.id)
        )
      )
      .catch((err) => console.log(err));
  };

  const handleClickUpdate = () => {
    console.log('click');
    props.setFormUpdate(!props.formUpdate);
  };

  // JSX
  return (
    <div
      className={`${
        checkTask ? 'opacity-30' : ''
      } flex px-4 font-semibold justify-between w-[80%] mx-auto py-4 overflow-hidden [&:nth-child(4n+1)]:bg-gradient-to-l [&:nth-child(4n+1)]:from-[#510094] [&:nth-child(4n+1)]:to-[#612be9] [&:nth-child(4n+2)]:bg-gradient-to-l [&:nth-child(4n+2)]:from-[#e70070] [&:nth-child(4n+2)]:to-[#ff44ef] [&:nth-child(4n+3)]:bg-gradient-to-l [&:nth-child(4n+3)]:from-[#FE4A14] [&:nth-child(4n+3)]:to-[#f4742f] [&:nth-child(4n+4)]:bg-gradient-to-l [&:nth-child(4n+4)]:from-[#0660f2] [&:nth-child(4n+4)]:to-[#35a1ff] text-[#FFF] rounded-lg shadow-lg hover:opacity-50 cursor-pointer`}
    >
      <div
        onClick={handleClickCheck}
        className='block w-full'
      >
        {props.title}
      </div>
      <div className='flex gap-x-2'>
        <HiPencilAlt
          onClick={handleClickUpdate}
          className='cursor-pointer'
          size={22}
        />
        <HiTrash
          className='cursor-pointer'
          onClick={handleClickDelete}
          size={22}
        />
      </div>
    </div>
  );
}

export default Task;
