import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Button from './components/Button';

const resuelto = [[5,3,4,6,7,8,9,1,2],
                  [6,7,2,1,9,5,3,4,8],
                  [1,9,8,3,4,2,5,6,7],
                  [8,5,9,7,6,1,4,2,3],
                  [4,2,6,8,5,3,7,9,1],
                  [7,1,3,9,2,4,8,5,6],
                  [9,6,1,5,3,7,2,8,4],
                  [2,8,7,4,1,9,6,3,5],
                  [3,4,5,2,8,6,1,7,9]];

const inicial =  [[5,3,0,0,7,0,0,0,0],
                  [6,0,0,1,9,5,0,0,0],
                  [0,9,8,0,0,0,0,6,0],
                  [8,0,0,0,6,0,0,0,3],
                  [4,0,0,8,0,3,0,0,1],
                  [7,0,0,0,2,0,0,0,6],
                  [0,6,0,0,0,0,2,8,0],
                  [0,0,0,4,1,9,0,0,5],
                  [0,0,0,0,8,0,0,7,9]];

function App() {

  const [board, setBoard] = useState(inicial);
  //Focus tendria que ser un objeto {i: i, j:j}
  const [focus, setFocus] = useState([]);

  const selectCell = ([i, j]) => {
    setFocus([i, j, board[i][j]]);
  }

  const playCell = (value) => {

    if(resuelto[focus[0]][focus[1]] === board[focus[0]][focus[1]]) return

    const newBoard = [...board];
    if(value === resuelto[focus[0]][focus[1]]) {
      newBoard[focus[0]][focus[1]] = value;
    } else {
      newBoard[focus[0]][focus[1]] = -value;
    }

    setBoard(newBoard);
  }

  return (
    <div className="App">
      <Board board={board} focus={focus} selectCell={selectCell}/>
      <div className={"teclado"}>
        {[1,2,3,4,5,6,7,8,9,0].map((num, index) => (
          <Button key={"b" + index} value={num} playCell={playCell}/>
          ))}
      </div>
    </div>
  );
}

export default App;
