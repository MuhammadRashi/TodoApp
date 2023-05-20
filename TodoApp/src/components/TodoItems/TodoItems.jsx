import React, { Fragment, useState } from 'react'
// import editImage from '../assets/edit.png'
// import image2 from '../assets/image2.png'
import editBtn from "../../assets/edit.png";
import deleteBtn from "../../assets/delete.png";
import './TodoItems.css'
import { EditItem } from '../EditItems/EditItem';


export const TodoItems = ({TaskList,editBtnHandle,SetActiveButton,buttonActive,SetTodoList}) => {

  // const [currentId,currentTask,currentTag]=buttonActive;

  return (
    <Fragment>
      {TaskList !== null && TaskList.map((list)=>(
        <div key={list.key} className="item-main-container"> 

          
          {/* {EditDeleteButtonTag === true ? <EditItem/>:null } */}
          {list.key === buttonActive.key && buttonActive.tag === true ? <div><EditItem currentTask={buttonActive} SetActiveButton={SetActiveButton} TaskList={TaskList} SetTodoList={SetTodoList}/></div>:
          
          <>
          <div className="list-item-container" >
            <p  > {list.name}  </p>
          </div>
          <div className="edit-button-container"  onClick={() => {editBtnHandle(list.key,list.name) }}>
            <img src={editBtn} />
          </div>
          <div className="delete-button-container">
            <img src={deleteBtn} />
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
