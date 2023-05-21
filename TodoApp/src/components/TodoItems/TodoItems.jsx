import React, { Fragment, useState } from 'react'
// import editImage from '../assets/edit.png'
// import image2 from '../assets/image2.png'
import editBtn from "../../assets/edit.png";
import deleteBtn from "../../assets/delete.png";
import './TodoItems.css'
import { EditItem } from '../EditItems/EditItem';


export const TodoItems = ({TaskList,editBtnHandle,SetActiveButton,buttonActive,SetTodoList}) => {

  // const [currentId,currentTask,currentTag]=buttonActive;

    const deleteHandle=(id)=>{
      let localData = localStorage.getItem("todolist");
      let parsedData = JSON.parse(localData);
      let undeleted = parsedData?.filter((todo) => todo?.key !== id);
      localStorage.setItem("todolist", JSON.stringify(undeleted));
      SetTodoList(undeleted);

    }

    const taskCompleteHandle=(currentTask)=>{
      let updatedTask;
      if(currentTask.complete === true){
          updatedTask = {
          key: currentTask.key,
          name: currentTask.name,
          tag: false,
          complete:false
      }
      }else{
        updatedTask = {
          key: currentTask.key,
          name: currentTask.name,
          tag: false,
          complete:true
      }}
      
    const update = TaskList !== null && TaskList.map((mapTodo) => {
        if (mapTodo.key === currentTask.key) {
            return updatedTask;
        } else {
            return mapTodo;
        }
    });
    SetTodoList(update);
    SetActiveButton(update);

    }

  return (
    <Fragment>
      {TaskList !== null && TaskList.map((list)=>(
        <div key={list.key} className="item-main-container"> 

          
          {list.key === buttonActive.key && buttonActive.tag === true ? <div><EditItem currentTask={buttonActive} SetActiveButton={SetActiveButton} TaskList={TaskList} SetTodoList={SetTodoList}/></div>:
          
          <>
          <div className="list-item-container" onClick={() => {taskCompleteHandle(list)}} >
            <p className =  {list.complete ? 'title-para':null}  > {list.name}  </p>
          </div>
          <div className="edit-button-container"  onClick={() => {editBtnHandle(list) }}>
            <img src={editBtn} />
          </div>
          <div className="delete-button-container">
            <img src={deleteBtn} onClick={()=>{deleteHandle(list.key)}} />
            </div>        
          </>
          
            
          }
      </div>
        ))}
      {/* <div className="item-main-container">

          <div className="list-item-container">
            <p>This is Todo item</p>
          </div>
          <div className="edit-button-container">
            <img src={editBtn} />
          </div>
          <div className="delete-button-container">
            <img src={deleteBtn} />
            </div>        
      </div> */}
          
    </Fragment>
  )
}
