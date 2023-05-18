import React from 'react'
import { Fragment } from 'react'
import './TextInput.css'

export const TextInput = ({inputValue,handleChange,errorMessage}) => {

  return (

    <Fragment>
            {errorMessage ?
            (<p className='danger'>{errorMessage}</p>):null
            }
            <input type="text" className="input-text" placeholder='New Todo' value={inputValue} onChange={handleChange} />
    </Fragment>
  )
}
