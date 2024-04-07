'use client'
import React, { useState } from 'react'
import Form from './form'
import { v4 as uuidv4 } from 'uuid'
import { Todo as TodoType} from '../types/todo'
import Todo from './todo'
import Edit from './edit'
uuidv4()

const TodoList = () => { 
    const [todoValue, setTodoValue] = useState<TodoType[]>([
        {
            id: '6d4ec95b-4db6-4dc1-90b3-65e0da315f07',
            task: 'Test status 0',
            isEditing: false,
            status: 0 
        },
        {
            id: 'ee83bf12-1b3b-482a-92ae-6c6a6328b8f0',
            task: 'Test status 1',
            isEditing: false,
            status: 1 
        },
        {
            id: 'df5aca68-231c-4f0b-9a9e-64196fdbef7d',
            task: 'Test status 2',
            isEditing: false,
            status: 2 
        },
        ]
    );

    const create = (todo: string) => {
        setTodoValue([...todoValue, { id: uuidv4(), task: todo, isEditing: false, status: 0}])
    }

    const deleteTodo = (id: string) => {
        setTodoValue(todoValue.filter(todo => todo.id !== id))
    }

    const edit = (id: string) => {
        setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (task: string, id: string) => { 
        setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    const changeStatus = (status: number, id: string) => {
        setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, status} : todo));
    }

    return ( 
        <div className='container bg-gray-400 p-6 rounded-md lg:px-8 max-w-full'>
            <Form createTodo = {create}/>
            <ul role="list" className="divide-y divide-gray-100 w-full">
                    {todoValue.map((todo, index) => (
                        <li key={todo.id} className="flex justify-between gap-x-6 py-5">
                            {todo.isEditing ? (
                                <Edit editTodo={editTask} task={todo} key={index}/>
                            ) : ( 
                                <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={edit} changeStatus={changeStatus}/>
                            )} 
                        </li>
                    ))} 
                </ul>
            
        </div>
    )
}

export default TodoList