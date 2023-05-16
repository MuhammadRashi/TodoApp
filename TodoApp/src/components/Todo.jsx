import React, { Fragment } from 'react'
import './Todo.css'
import { TextInput } from './TextInput/TextInput'

export const Todo = () => {
  return (
    <Fragment>

        <div className='todo-container' >
            {/* <div className='head-container'> */}
                <h1>Todo List</h1>
            {/* </div> */}
            <div>
            <TextInput/>
            </div>
        </div>
    </Fragment>
  )
}
