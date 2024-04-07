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
        ? 'inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10' : task.status === 1 ? 'inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20' : 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20';
    return ( 
        //<div className='flex justify-between items-center bg-black-800 text-black py-3 px-4 rounded-md mb-1 cursor-pointer'>
        <div className='flex min-w-0 gap-x-4'>
            <span 
                className={badgeColor}
            >
                {task.status === 0 ? 'Open' : task.status === 1 ?  'InProgress' : 'Done'}
            </span>
            <p className='font-primary'>{task.task}</p>
            <div className='flex items-center gap-x-4'>
                <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)}/>
                <BsFillTrash2Fill className='text-xl' onClick={() => deleteTodo(task.id)}/>
                <ChangeStatus todoId={task.id} onChangeStatus={changeStatus}/>
            </div> 
        </div>
    )
}

export default Todo