import React, { Fragment, useEffect, useState } from 'react'
import './Todo.css'
import { TextInput } from './TextInput/TextInput'
import { Buttons } from './Button/Buttons'
import { TodoItems } from './TodoItems/TodoItems'
import { EditItem } from './EditItems/EditItem'

// npm i uuid for random id from node js
import { v4 as tskId } from "uuid";

export const Todo = () => {

  // error useState
  const [errorMessage,SetErrorMessage]=useState("");

  //list of Task
  const [todolist, SetTodoList] = useState([]);

  // Input Value
  const [inputValue, SetInputValue] = useState("");


  // Input Value
  const handleChangeInputValue = (event) => {
    SetInputValue(event.target.value);
    SetErrorMessage("");
  }


  // Add Todo Task to array
  const addTodoTask = () => {
    if(inputValue!=""){

      let currentTask={
        key:tskId(),
        name:inputValue,
        tag:false
        
      }
      SetTodoList((prev) => [...prev, currentTask]);
      SetInputValue("");
      SetErrorMessage("");
    }else{
      SetErrorMessage("Enter Valid Data");
    }
  }

  console.log(todolist.key=="all task");


  useEffect(() => {
    

  
   
  }, [todolist])
  
  return (
    <Fragment>

      <div className='todo-container' >
        <h1>Todo List</h1>
        <div className='input-container'>
          <TextInput inputValue={inputValue} handleChange={handleChangeInputValue} errorMessage={errorMessage} />
          <Buttons addTodoTask={addTodoTask} />
          <TodoItems TaskList={todolist}/>
          <EditItem />
        </div>
      </div>
    </Fragment>
  )
}
