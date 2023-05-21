import React, { Fragment, useState } from 'react'
import './EditItem.css'
import { Buttons } from '../Button/Buttons'

export const EditItem = ({ currentTask, SetActiveButton, TaskList, SetTodoList }) => {

    const [updatedData, SetUpdatedData] = useState(currentTask.task);

    const updateInputHandlechange = (event) => {
        SetUpdatedData(event.target.value)
    }

    const saveButtonHandle = () => {
        let updatedTask = {
            key: currentTask.key,
            name: updatedData,
            tag: false,
            complete:currentTask.complete
        }
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



    const cancelButtonHandle = () => {
        let changeTask = {
            key: currentTask.key,
            task: updatedData,
            tag: false
        }
        SetActiveButton(changeTask)
    }
    return (
        <Fragment>
            <div className="edit-item-container">
                <div className="edit-item-label">
                    <input type="text" className="input-edit" placeholder='Editing Current Todo Item' onChange={updateInputHandlechange} defaultValue={currentTask.task} />
                </div>
                <div className="edit-item-button">
                    <button className='button-edit' onClick={saveButtonHandle}>SAVE</button>
                    <button className='button-cancel' onClick={cancelButtonHandle}>CANCEL</button>
                </div>
            </div>
        </Fragment>
    )
}
