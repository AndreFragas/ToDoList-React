import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrash2Fill } from 'react-icons/bs';
import { Todo as TodoType } from '../types/todo';
import ChangeStatus from './change-status';

interface TodoProps {
    task: TodoType;
    deleteTodo: (id: string) => void;
    editTodo: (id: string) => void;
    changeStatus: (status: number, id: string) => void;
}

const Todo = ({ task, deleteTodo, editTodo, changeStatus}: TodoProps) => { 
    const badgeColor = task.status === 0
        ? 'inline-flex items-center justify-center rounded-md bg-blue-200 px-2 py-1 text-xs font-medium text-blue-600 ring-1 ring-inset ring-blue-300' : task.status === 1 ? 'inline-flex items-center justify-center rounded-md bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20' : 'inline-flex items-center justify-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20';
    return ( 
        <div className='grid grid-cols-12 items-center bg-black-800 text-black py-3 px-4 rounded-md mb-1 cursor-pointer w-full'>
            <span 
                className={`${badgeColor} col-span-1 w-21`}
            >
                {task.status === 0 ? 'Open' : task.status === 1 ?  'In progress' : 'Done'}
            </span>
            <p className='font-primary text-center col-span-8'>{task.task}</p>
            <div className='flex items-center justify-end gap-x-4 col-span-3'>
                <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)}/>
                <BsFillTrash2Fill className='text-xl' onClick={() => deleteTodo(task.id)}/>
                <ChangeStatus todoId={task.id} onChangeStatus={changeStatus}/>
            </div> 
        </div>
    )
}

export default Todo