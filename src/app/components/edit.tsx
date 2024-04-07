'use client'
import React, { FormEvent, useState } from 'react'
import { Todo } from '../types/todo';

interface Props {
    editTodo: (todo: string, id: string) => void;
    task: Todo
}

const Edit = ({ editTodo, task }: Props): JSX.Element =>  {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        editTodo(value, task.id)
        setValue('')
    }

    return ( 
        <form className='font-primary w-full' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='outline-none bg-transparent border border-slate-300 p-4 w-11/12 text-black mb-8 rounded placeholder:text-slate-500' 
                placeholder='Update task'
                onChange={(e) => setValue(e.target.value)}
            />
            <button 
                className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded m1-2 ml-3'
            >
                Update Task
            </button>
        </form>
    )
}

export default Edit