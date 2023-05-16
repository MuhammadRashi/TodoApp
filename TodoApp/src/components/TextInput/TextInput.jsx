import React from 'react'
import { Fragment } from 'react'
import './TextInput.css'

export const TextInput = () => {
  return (

    <Fragment>
        <div className='input-container'>
            <input type="text" className="text" placeholder='New Todo' />
        </div>
    </Fragment>
  )
}
