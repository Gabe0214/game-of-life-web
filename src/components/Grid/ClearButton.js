import React from 'react'
import Button from '@material-ui/core/Button'
import { buttonStyle, buttonStyles } from './ButtonStyle'
export const Clear = ({numRows, numCols, setGrid, setCount, simulation, setSimulation}) => {
    
    const classes = buttonStyles()
  const clearGrid = () => {
    setCount(0)

    setSimulation(!simulation)
    const rows = []
    for (let i = 0; i < numRows; i++){
      rows.push(Array.from(Array(numCols), () => 0))
    }
     return setGrid(rows)
  }


    return(
        <>
        <Button variant="outlined" color="primary" onClick={clearGrid} className={classes.clear}>
           Clear
        </Button>
        </>
    )
}