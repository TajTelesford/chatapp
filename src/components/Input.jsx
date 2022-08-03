import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input value={()=>{
            props.handleOnChange()
        }}/>
    </div>
  )
}

export default Input