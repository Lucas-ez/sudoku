import React from 'react'

function Button({value, playCell}) {

  const handleClick = () => {
    playCell(value);
  }

  return (
    <div className='Button' onClick={handleClick}>
        {(value)?value:" "}
    </div>
  )
}

export default Button