import React from 'react'
import Row from './Row'

function Board({board}) {
  return (
    <div className='Board'>
        {board.map((row, i) => {
            return <Row row={row} key={i}/>
        })}
    </div>
  )
}

export default Board