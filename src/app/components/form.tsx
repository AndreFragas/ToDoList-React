'use client'
import React, { FormEvent, useState } from 'react'

interface Props {
    createTodo: (todo: string) => void;
}

const Form = ({ createTodo }: Props): JSX.Element =>  {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        createTodo(value)
        setValue('')
    }

    return ( 
        <form className='flex flex-col items-center mb-4 font-primary' onSubmit={handleSubmit}>
            <div className="flex items-center">
            <input 
                type='text' 
                className='outline-none bg-transparent border border-slate-300 p-4 w-[600px] text-black rounded placeholder:text-slate-500'
                placeholder='Describe your task'
                onChange={(e) => setValue(e.target.value)}
            />
            <button 
                className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-5'
            >
                Add Task
            </button>
            </div>
        </form>
    )
}

export default Form