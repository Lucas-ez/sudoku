import React from 'react'
import Row from './Row'

function Board({board, focus, selectCell}) {
  return (
    <div className='Board'>
        {board.map((row, i) => {
            return <Row row={row} key={i} i={i} focus={focus} selectCell={selectCell}/>
        })}
    </div>
  )
}

export default Board