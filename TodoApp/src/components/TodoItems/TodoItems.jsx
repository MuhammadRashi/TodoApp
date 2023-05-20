import React, { Fragment, useState } from 'react'
// import editImage from '../assets/edit.png'
// import image2 from '../assets/image2.png'
import editBtn from "../../assets/edit.png";
import deleteBtn from "../../assets/delete.png";
import './TodoItems.css'
import { EditItem } from '../EditItems/EditItem';


export const TodoItems = ({TaskList,EditDeleteButtonTag,editBtnHandle,myKey}) => {
  return (
    <Fragment>
      {TaskList.map((list)=>(

        

        <div key={list.key} className="item-main-container">

          <div className="list-item-container" >
            <p  > {list.name} </p>
          </div>
          {/* {EditDeleteButtonTag === true ? <EditItem/>:null } */}
          {list.key === myKey ? <EditItem/>:null }
          
          <div className="edit-button-container"  onClick={() => {editBtnHandle(list.key,list.name) }}>
            <img src={editBtn} />
          </div>
          <div className="delete-button-container">
            <img src={deleteBtn} />
            </div>        
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
