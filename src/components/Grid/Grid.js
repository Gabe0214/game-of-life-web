import React, { useCallback, useEffect, useRef, useState } from 'react'
import produce from 'immer';
import { useStyles } from './DropDownStyle'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

// const numRows = 30;
// const numCols = 40;


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
    const classes = useStyles()
    const [numRows, setNumRows] = useState(30)
    const [numCols, setNumCols] = useState(30)
    const [colorCell, setColorCell] = useState('red') 
    const [grid, setGrid] = useState(null)



   const clearGrid = () => {
    const rows = []
    for (let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0))
    }
     return setGrid(rows)
   }
   


   const [simulation, setSimulation] = useState(false)
   const runningRef = useRef(simulation)
   runningRef.current = simulation

   const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

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

    setTimeout(runSimulation, 10);
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
 


   const increaseGridSize = () => {
      setNumCols(numCols + 10)
      setNumRows(numRows + 10)
   }


   const randomize = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
      );
    }

    setGrid(rows);

   }

   

   const colorChange = (e) => {
       console.log(e.target.value)
     setColorCell(e.target.value)
   }

    return(
    <>   
        <button onClick={increaseGridSize}>+</button>
        <button onClick={() => { setSimulation(!simulation); if(!simulation){
            runningRef.current = true;
            runSimulation();
        }}}>{simulation ? 'Stop' : 'Start'}</button>
        <button onClick={randomize}>Randomize</button>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Color</InputLabel>
        <Select
          native
          value={colorCell}
          onChange= {colorChange}
          label="Color"
          inputProps={{
            name: 'Color',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'red'}>Red</option>
          <option value={'blue'}>Blue</option>
          <option value={'green'}>Green</option>
        </Select>
      </FormControl>
        <button onClick={clearGrid}>Clear</button>
        <div style={{display: 'grid', gridTemplateColumns: `repeat(${numCols}, 20px)`, margin: '0 auto', justifyContent:'center', marginBottom:'5%'}}>
            {grid && grid.map((rows, i) => rows.map((col, k) => (
                <div key={`${i}-${k}`}
                onClick={()=>{clickedCell([i],[k])}}
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