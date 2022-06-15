import React from 'react'

function Cell({value, i, j}) {
  return (
    <div className={'Cell ' + ((value)?"llena":"")}>
        {(value)?value:""}
    </div>
  )
}

export default Cell