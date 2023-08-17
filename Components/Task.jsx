// Librairies
import useTaskStore from '@/store/store';
import { useState } from 'react';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

function Task({ id, setId, formUpdate, title, setFormUpdate }) {
    // State
    const [checkTask, setCheckTask] = useState(false);
    const deleteTask = useTaskStore((state) => state.deleteTask);

    // Méthodes
    const handleClickCheck = () => {
        setCheckTask(!checkTask);
    };

    const handleClickDelete = () => {
        deleteTask(id);
    };

    const handleClickUpdate = () => {
        setFormUpdate(!formUpdate);
        setId(id);
    };

    // JSX
    return (
        <div
            className={`${
                checkTask ? 'opacity-30 line-through' : ''
            } flex font-semibold justify-between w-[90%] lg:w-[80%] mx-auto overflow-hidden [&:nth-child(4n+1)]:bg-gradient-to-l [&:nth-child(4n+1)]:from-[#510094] [&:nth-child(4n+1)]:to-[#612be9] [&:nth-child(4n+2)]:bg-gradient-to-l [&:nth-child(4n+2)]:from-[#e70070] [&:nth-child(4n+2)]:to-[#ff44ef] [&:nth-child(4n+3)]:bg-gradient-to-l [&:nth-child(4n+3)]:from-[#FE4A14] [&:nth-child(4n+3)]:to-[#f4742f] [&:nth-child(4n+4)]:bg-gradient-to-l [&:nth-child(4n+4)]:from-[#0660f2] [&:nth-child(4n+4)]:to-[#35a1ff] text-[#FFF] rounded-lg shadow-lg hover:opacity-90 cursor-pointer`}
        >
            <div
                onClick={handleClickCheck}
                className='block w-full px-4 py-4'
            >
                {title}
            </div>
            <div className='flex p-4 gap-x-2'>
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
