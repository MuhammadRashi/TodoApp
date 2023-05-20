import React, { Fragment, useState } from 'react'
import './EditItem.css'
import { Buttons } from '../Button/Buttons'

export const EditItem = ({currentTask,SetActiveButton,TaskList,SetTodoList }) => {

    const [updatedData,SetUpdatedData]=useState("");

    const updateInputHandlechange=(event)=>{
        SetUpdatedData(event.target.value);
    }

    const saveButtonHandle=()=>{
        let updatedTask={
            key:currentTask.key,
            name:updatedData,
            tag:false
        }
        console.log(updatedTask,"===updated task");
       const update = TaskList !== null && TaskList.map((mapTodo) => {
           console.log(mapTodo,"eeeee");
            if(mapTodo.key === currentTask.key){
                return updatedTask;
            }
        });
        console.log(TaskList,"=======edit task list");
        SetTodoList(update);
        SetActiveButton(update);
        console.log(TaskList,"=======after edit task list");
    }



    const cancelButtonHandle=()=>{
        let changeTask={
            key:currentTask.key,
            task:updatedData,
            tag:false
        }
        SetActiveButton(changeTask)
        console.log(currentTask,"===ct");
    }
    return (
        <Fragment>
            <div className="edit-item-container">
                <div className="edit-item-label">
                <input type="text" className="input-edit" placeholder='Editing Current Todo Item' onChange={updateInputHandlechange} defaultValue={currentTask.task} />
                </div>
                <div className="edit-item-button">
                <button className='button-edit' onClick={saveButtonHandle}>SAVE</button>
                <button className='button-cancel'onClick={cancelButtonHandle}>CANCEL</button>
                </div>
            </div>
        </Fragment>
    )
}
