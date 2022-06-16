import React from 'react'

function Cell({value, i, j, focus, selectCell}) {
  
  const handleClick = () => {
    selectCell([i, j]);
  }

  const style = {
    className: '',
    value: value
  }

  if(value > 0) {
    style.className = ' llena';
  } else if (value < 0) {
    style.className = ' wrong';
    style.value = -value
  }
  if (focus[0] === i && focus[1] === j)
    style.className = style.className + ' focused';
  
  if(focus[2] === value && value > 0 && focus[0] != i && focus[1] != j) {
    style.className += ' value-focused';
  }
  return (
    <div className={'Cell' + style.className}
    onClick={handleClick}>
        {(value)?style.value:""}
    </div>
  )
}

export default Cell