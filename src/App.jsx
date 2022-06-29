import { useEffect } from 'react';
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

// const casi = [[5,3,4,6,7,8,9,1,2],
//               [6,7,2,1,9,5,3,4,8],
//               [1,9,8,3,4,2,5,6,7],
//               [8,5,9,7,6,1,4,2,3],
//               [4,2,6,8,5,3,7,9,1],
//               [7,1,3,9,2,4,8,5,6],
//               [9,6,1,5,3,7,2,8,4],
//               [2,8,7,4,1,9,6,3,5],
//               [3,4,5,0,8,6,1,7,9]];

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
  //cambiar focus a un objeto como {i: i, j:j}
  const [focus, setFocus] = useState([]);
  const [timer, setTimer] = useState(0);
  const [win, setWin] = useState(false);
  const [errores, setErrores] = useState(0);

  const selectCell = ([i, j]) => {
    if(win)
      setFocus([]);
    else
      setFocus([i, j, board[i][j]]);
  }

  const playCell = (value) => {
    
    if(win) return;

    if(resuelto[focus[0]][focus[1]] === board[focus[0]][focus[1]]) return
    
    const newBoard = [...board];
    if(value === resuelto[focus[0]][focus[1]]) {
      newBoard[focus[0]][focus[1]] = value;
    } else {
      if(value !== 0)
        setErrores(errores + 1);
      newBoard[focus[0]][focus[1]] = -value;
    }
    
    setBoard(newBoard);
  }
  
  useEffect(() => {
    
    let interval = null;
    
    if(!win) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [win]);

  useEffect(() => {
    
    for(let i = 0; i < board.length; i++) {
      for(let j = 0; j < board[i].length; j++) {
        if(board[i][j] !== resuelto[i][j]) 
          return
      }
    }

    setWin(true);

  }, [board, win]);
  
  return (
    <div className="App">
      <div className='info'>
        <span className='timer'>
          <span>{(timer>3600)?Math.floor(timer/3600)+":":""}</span>
          <span>{("0" + (Math.floor(timer/60))%60).slice(-2)}:</span>
          <span>{("0" + timer%60).slice(-2)}</span>
        </span>
        <span className='info-errores' style={{opacity:(errores)?"1":"0"}}>
          {errores}X
        </span>
      </div>
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
