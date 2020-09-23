import React, { useCallback, useEffect, useRef, useState } from 'react'
import produce from 'immer';
import { Randomize } from './Randomize'
import { Start } from './StartButton'
import { Clear } from './ClearButton'
import { DropDown } from './ColorDropDown'

const conditions = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
]

const Grid = () => {
    const [numRows, setNumRows] = useState(30)
    const [numCols, setNumCols] = useState(30)
    const [colorCell, setColorCell] = useState('red') 
    const [grid, setGrid] = useState(null)
    const [count, setCount] = useState(0)

   

   const [simulation, setSimulation] = useState(false)
   const runningRef = useRef(simulation)
   runningRef.current = simulation

   const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setCount((count) => {
        return count +=1
    })
    setGrid(g => {
      return produce(g, gridCopy => {
          console.log(numCols, numRows)
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            conditions.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);


  const clickedCell = (i,k) => {
    const newGrid = produce(grid, gridCopy => {
        gridCopy[i][k] = gridCopy[i][k] ? 0 : 1;
    })

     setGrid(newGrid)
}

   useEffect(() => {
    const rows = []
    for (let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return setGrid(rows)
   }, [numCols, numRows])
 


//    const increaseGridSize = () => {
//       setNumCols(numCols + 10)
//       setNumRows(numRows + 10)
//    }


   

    return(
    <>   
        {/* <button onClick={increaseGridSize}>+</button> */}
        <Start setSimulation ={setSimulation} simulation={simulation} runSimulation={runSimulation} runningRef={runningRef}/>
        <Randomize setGrid={setGrid} numRows={numRows} cols ={numCols}/>
         <DropDown color={colorCell} setColor={setColorCell}/>
        <Clear setSimulation={setSimulation} simulation ={simulation} setCount = {setCount} setGrid={setGrid} numCols={numCols} numRows={numRows}/>
        <br/>
        <h2>Generations: {count}</h2>
        <div style={{display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px)`, margin: '0 auto', justifyContent:'center', marginBottom:'5%'}}>
            {grid && grid.map((rows, i) => rows.map((col, k) => (
                <div key={`${i}-${k}`}
                onClick={!simulation ? ()=>{clickedCell([i],[k])}: null}
                style={{height: 20, width: 20, backgroundColor: grid[i][k] ? `${colorCell}`: null,
                border: '1px solid grey'
            }}
                >
                </div>
            )))}
        </div>
    </>
    )
}

export default Grid