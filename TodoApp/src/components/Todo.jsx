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
  const [currentId, SetCurrentId] = useState("");

  //Edit Delete button handle state
  const [buttonActive,SetButtonActive]=useState([
    {
      key:0,
      task:"",
      tag:false,

    }
  ]);

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
// when press Enter key in input then add task to array
  const handleEnterKey=(event)=>{

    if(event.key === "Enter")
    {
      addTodoTask();
      // saveTaskToLocal();
      // console.log(event.key,"=====press enter");

    }

  }

// Task save to local storage
  const saveTaskToLocal=()=>{
    localStorage.setItem("todolist", JSON.stringify(todolist));

    // let dataLocalStorage = localStorage.getItem("todolist");

    // console.log(localStorage.getItem(todolist),"====local");
    // console.log(dataLocalStorage,"====todo List");

  }

  // retrive task from local storage

  const getTaskFromLocal=()=>{
    let dataLocalStorage = localStorage.getItem("todolist");
    // SetTodoList(JSON.parse(dataLocalStorage));
   let getData= JSON.parse(dataLocalStorage);
   if(getData){

     SetTodoList(getData)
   }
  }

  const editBtnHandle=(id,task)=>{
    let activeDetails={
      key:id,
      task:task,
      tag:true,
    }
    SetButtonActive(activeDetails);
    SetCurrentId(id);
    console.log(currentId,"key Edit button pressed");

  }





  // console.log(todolist.key=="all task");


  // two useEffect for -- save to local storage when trigger todolist -- other get data from local storage
  useEffect(() => {
   
    saveTaskToLocal()
   
  }, [todolist])
  
  useEffect(() => {
     getTaskFromLocal()
  }, [])
  
  return (
    <Fragment>

      <div className='todo-container' >
        <h1>Todo List</h1>
        <div className='input-container'>
          <TextInput inputValue={inputValue} handleChange={handleChangeInputValue} errorMessage={errorMessage} enterKeyPress={handleEnterKey} />
          <Buttons addTodoTask={addTodoTask} />
          <TodoItems TaskList={todolist} EditDeleteButtonTag={buttonActive.tag} editBtnHandle={editBtnHandle} myKey={currentId}/>
          {/* <EditItem /> */}
        </div>
      </div>
    </Fragment>
  )
}
