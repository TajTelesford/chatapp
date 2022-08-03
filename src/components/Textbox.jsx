import React from 'react'

const Textbox = (props) => {
    

  return (
    <div>
        <form>
            <input onChange={props.onChange} value={props.value} />
            <button onClick={props.sendMessage} />
        </form>
    </div>
  )
}

export default Textbox