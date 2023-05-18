import React, { Fragment } from 'react'
import './EditItem.css'
import { Buttons } from '../Button/Buttons'

export const EditItem = () => {
    return (
        <Fragment>
            <div className="edit-item-container">
                <div className="edit-item-label">
                <input type="text" className="input-edit" placeholder='Editing Current Todo Item' />
                </div>
                <div className="edit-item-button">
                <button className='button-edit'>SAVE</button>
                <button className='button-cancel'>CANCEL</button>
                </div>
            </div>
        </Fragment>
    )
}
