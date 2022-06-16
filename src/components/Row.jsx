import React from 'react'
import Cell from './Cell'

function Row({row, i, focus, selectCell}) {
  return (
    <div className='Row'>
        {row.map((value, j) => {
            return <Cell value={value} i={i} j={j} key={i + "" + j} focus={focus} selectCell={selectCell}/>
        })}
    </div>
  )
}

export default Row