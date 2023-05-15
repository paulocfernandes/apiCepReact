import React from 'react'

export const Label= (props) => {
  return (
    <div>
      <label  htmlFor={props.name.toLowerCase()} className='form-label' >
      {props.name}
      </label>
      </div>
  )
}