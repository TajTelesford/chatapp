import React from 'react'

const Button = (props) => {
  return (
    <button type='submit' placeholder='Button' onClick={()=>{
        props.sendMessage()
    }}/>
  )
}

export default Button