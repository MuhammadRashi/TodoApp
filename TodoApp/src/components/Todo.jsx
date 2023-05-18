import React, { Fragment } from 'react'
import './Todo.css'
import { TextInput } from './TextInput/TextInput'
import { Buttons } from './Button/Buttons'
import { TodoItems } from './TodoItems/TodoItems'
import { EditItem } from './EditItems/EditItem'

export const Todo = () => {
  return (
    <Fragment>

        <div className='todo-container' >
                <h1>Todo List</h1>
            <div className='input-container'>
            <TextInput/>
            <Buttons/> 
            <TodoItems/>
            <EditItem/>
            </div>
        </div>
    </Fragment>
  )
}
