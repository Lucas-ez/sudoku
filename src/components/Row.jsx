import React from 'react'
import Cell from './Cell'

function Row({row, i}) {
  return (
    <div className='Row'>
        {row.map((value, j) => {
            return <Cell value={value} i={i} j={j} key={i + "" + j}/>
        })}
    </div>
  )
}

export default Row